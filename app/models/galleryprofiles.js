
const { sql } = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const galleryprofiles = function (GalleryProfile) {
	this.userID = GalleryProfile.userID;
	this.name = GalleryProfile.name;
	this.image = GalleryProfile.image
	this.description = GalleryProfile.description;
	this.likes = GalleryProfile.likes;

};
// CONSTRAINT userID FOREIGN KEY (userID)
//         REFERENCES public."StyleTags" (id) MATCH SIMPLE
//         ON UPDATE NO ACTION
//         ON DELETE CASCADE
//         NOT VALID
galleryprofiles.create = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.GalleryProfile (
        id SERIAL NOT NULL,
		userID SERIAL NOT NULL,
        name text ,
        image text,
		description text ,
		likes integer,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id)
		)  ` , async (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			if (!req.body.name || req.body.name === '') {
				res.json({
					message: "Please Enter your name name",
					status: false,
				});
			} else if (!req.body.description) {
				res.json({
					message: "Please Enter descriptions",
					status: false,
				});
			} else {
				let photo = '';
				if (req.file) {
					const { path } = req.file;
					photo = path;
				}
				const { userID, name, description } = req.body;
				sql.query(`SELECT * FROM "galleryprofile" WHERE ( userid = $1)`, [req.body.userID], async (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					} else {
						if (result.rows.length > 0) {
							res.json({
								message: "Profile Already Exists",
								status: false,
							});
						} else {
							const query = `INSERT INTO "galleryprofile" (id,userID, name,image,description,likes, createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, $3, $4, 0 , 'NOW()','NOW()' ) RETURNING * `;
							const foundResult = await sql.query(query,
								[userID, name, photo, description]);
							if (foundResult.rows.length > 0) {
								if (err) {
									res.json({
										message: "Try Again",
										status: false,
										err
									});
								}
								else {
									res.json({
										message: "Profile Added Successfully!",
										status: true,
										result: foundResult.rows,
									});
								}
							} else {
								res.json({
									message: "Try Again",
									status: false,
									err
								});
							}
						}
					}
				});

			};
		}

	});
}



galleryprofiles.ViewMyProfile = (req, res) => {
	sql.query(`SELECT * FROM "galleryprofile" WHERE ( userid = $1)`, [req.params.id], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "My Profile Details",
				status: true,
				result: result.rows
			});
		}
	});
}

galleryprofiles.getAllPublicProfiles = (req, res) => {
	sql.query(`SELECT "galleryprofile".* FROM "galleryprofile"
	 INNER JOIN "folder" ON "galleryprofile".userid = "folder".userid
	 WHERE "folder".userid = "galleryprofile".userid 
	 AND "folder".status = 'public'
	 GROUP BY "galleryprofile".id
	 `, (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "All Profile Details",
				status: true,
				result: result.rows,
			});
		}
	});

}


galleryprofiles.UpdateProfile = async (req, res) => {
	if (req.body.id === '') {
		res.json({
			message: "id is required",
			status: false,
		});
	} else {
		const GalleryProfileData = await sql.query(`select * from "galleryprofile" where id = $1`, [req.body.id]);


		if (GalleryProfileData.rows.length > 0) {
			const oldname = GalleryProfileData.rows[0].name;
			const olddescription = GalleryProfileData.rows[0].description;

			let { id, name, description } = req.body;

			if (name === undefined || name === '') {
				name = oldname;
			}
			let photo = GalleryProfileData.rows[0].image;
			console.log(req.file);
			if (req.file !== undefined && req.file !== '') {
				const { path } = req.file;
				photo = path;
			}
			if (description === undefined || description === '') {
				description = olddescription;
			}
			sql.query(`UPDATE "galleryprofile" SET  name = $1, 
		image = $2, description = $3  WHERE id = $4;`,
				[name, photo, description, id], async (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					} else {
						if (result.rowCount === 1) {
							const data = await sql.query(`select * from "galleryprofile" where id = $1`, [req.body.id]);
							res.json({
								message: "Gallery Profile Updated Successfully!",
								status: true,
								result: data.rows,
							});
						} else if (result.rowCount === 0) {
							res.json({
								message: "Not Found",
								status: false,
							});
						}
					}
				});

		} else {
			res.json({
				message: "Not Found",
				status: false,
			});
		}
	}
}
galleryprofiles.countAllImages = (req, res) => {
	sql.query(`SELECT COUNT(*) FROM "images" WHERE  (userid = $1 AND folderstatus = 'public')  `, [req.body.userID], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "Images Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}



galleryprofiles.delete = async (req, res) => {
	const data = await sql.query(`select * from "galleryprofile" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM "galleryprofile" WHERE id = $1;`, [req.params.id], (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "Profile Deleted Successfully!",
					status: true,
					result: data.rows,

				});
			}
		});
	} else {
		res.json({
			message: "Not Found",
			status: false,
		});
	}
}
module.exports = galleryprofiles;

