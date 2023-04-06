// const GalleryProfile = sequelize.define("galleryprofile", {
// 	userID: {
// 	name: {
// 	image: {
// 	description: {

const {sql} = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const GalleryProfile = function (GalleryProfile) {
	this.userID = GalleryProfile.userID;
	this.name = GalleryProfile.name;
	this.image = GalleryProfile.image
	this.description = GalleryProfile.description;
};
// CONSTRAINT userID FOREIGN KEY (userID)
//         REFERENCES public."StyleTags" (id) MATCH SIMPLE
//         ON UPDATE NO ACTION
//         ON DELETE CASCADE
//         NOT VALID
GalleryProfile.create = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.GalleryProfile (
        id SERIAL NOT NULL,
		userID SERIAL NOT NULL,
        name text ,
        image text,
		description text ,
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
				sql.query(`SELECT * FROM "galleryprofile" WHERE ( id = $1)`, [req.body.userID], async (err, result) => {
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
							const query = `INSERT INTO "galleryprofile" (id,userID, name,image,description, createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, $3, $4, 'NOW()','NOW()' ) RETURNING * `;
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



GalleryProfile.ViewMyProfile = (req, res) => {
	sql.query(`SELECT * FROM "galleryprofile" WHERE ( id = $1)`, [req.params.id], (err, result) => {
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

GalleryProfile.getAllPublicProfiles = (req, res) => {
	sql.query(`SELECT * FROM "galleryprofile";`, (err, result) => {
		if (err) {
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


GalleryProfile.UpdateProfile = async (req, res) => {
	if (req.body.id === '') {
		res.json({
			message: "id is required",
			status: false,
		});
	} else {
		const GalleryProfileData = await sql.query(`select * from "galleryprofile" where id = $1`, [req.body.id]);
		const oldname = GalleryProfileData.rows[0].name;
		const oldimage = GalleryProfileData.rows[0].image;
		const olddescription = GalleryProfileData.rows[0].description;

		let { id, name, image, description } = req.body;

		if (name === undefined || name === '') {
			name = oldname;
		}
		if (image === undefined || image === '') {
			image = oldimage;
		}
		if (description === undefined || description === '') {
			description = olddescription;
		}
		sql.query(`UPDATE "galleryprofile" SET  name = $1, 
		image = $2, description = $3  WHERE id = $4;`,
			[name, image, description, id], async (err, result) => {
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
	}
}


GalleryProfile.delete = async (req, res) => {
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
module.exports = GalleryProfile;

