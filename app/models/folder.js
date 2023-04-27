const { sql } = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Folder = function (Folder) {
	this.userID = Folder.userID
	this.name = Folder.name;
	this.status = Folder.status;;
};

Folder.create = async (req, res) => {
	if (!req.body.name || req.body.name === '') {
		res.json({
			message: "Please Enter Folder name",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.Folder (
        id SERIAL,
		userID SERIAL NOT NULL,
        name text NOT NULL,
        status text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id))  ` , (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				sql.query(`INSERT INTO Folder (id, userID, name , status, createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2  ,$3, 'NOW()', 'NOW()') RETURNING * `
					, [req.body.userID, req.body.name, req.body.status], (err, result) => {
						if (err) {
							res.json({
								message: "Try Again",
								status: false,
								err
							});
						}
						else {
							res.json({
								message: "Folder Added Successfully!",
								status: true,
								result: result.rows,
							});
						}

					})

			};
		});
	}
}

Folder.GetAFolder = (req, res) => {
	// sql.query(`SELECT "folder".id AS "FavID", "folder".name,
	// "folder".status, "folder".userid AS "UserID", "images".id AS "ImageID",
	// "images".folderid, "images"."folderstatus", "images".name,
	//   "images".image, "images".seedid,"images".createdat,
	//    "images".updatedat
	//   FROM "folder" 
	//   JOIN "images" ON "folder"."id" = $1 AND 
	//    "folder"."id" = "images"."folderid" AND "folder"."userid" = $2`

	sql.query(`SELECT * FROM Folder WHERE ( id = $1 AND userID = $2);`
		, [req.body.id, req.body.userID], (err, result) => {
			if (err) {
				console.log(err);
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				sql.query(`SELECT * FROM images WHERE ( folderid = $1 AND userID = $2);`
					, [req.body.id, req.body.userID], (err, images) => {

						res.json({
							message: "Folder Details",
							status: true,
							result: result.rows,
							images: images.rows
						});
					});
			}
		});
}

Folder.viewUserAllFolders = (req, res) => {
	// sql.query(`SELECT "folder".*, "images".COUNT(*)
	// FROM "folder" 
	// LEFT JOIN "images"
	//  ON "folder"."id" = "images"."folderid" 
	//  AND "folder"."userid" = $1`,
	// sql.query(`SELECT folderid, COUNT(*) AS image_count FROM "images"
	//  WHERE  (userid = $1) GROUP BY "images".folderid `, [req.params.id], (err, count) => {

	sql.query(`SELECT COUNT(*) AS image_count, "folder".* FROM "folder" 
	LEFT JOIN "images" ON "folder".id = "images".folderid   
	WHERE "folder".userid = $1 
	GROUP BY "images".folderid , "folder".id
	ORDER BY "folder".createdat DESC`,
		[req.params.id], (err, result) => {
			if (err) {
				console.log(err);
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "Folder Details",
					status: true,
					result: result.rows,
					// count: count.rows
				});
			}
		});
	// })
}

Folder.getAllPrivateFolder = (req, res) => {
	sql.query(`SELECT * FROM Folder WHERE userid = $1 AND status = 'private'`, [req.body.userID], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Folder Details",
				status: true,
				result: result.rows
			});
		}
	});
}
Folder.getAllPublicFolder = (req, res) => {
	sql.query(`SELECT COUNT(*) AS image_count, "folder".* FROM "folder" 
	LEFT JOIN "images" ON "folder".id = "images".folderid   
	WHERE "folder".userid = $1 AND status = 'public'
	GROUP BY "images".folderid , "folder".id
	ORDER BY "folder".createdat DESC`
	// ,
	// sql.query(`SELECT * FROM Folder WHERE userid = $1 AND status = 'public'`
	, [req.body.userID], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Folder Details",
				status: true,
				result: result.rows
			});
		}
	});
}


Folder.viewAll = (req, res) => {
	sql.query(`SELECT * FROM Folder;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Folder Details",
				status: true,
				result: result.rows,
			});
		}
	});

}


Folder.UpdateFolderStatus = (req, res) => {
	if (req.body.status === '') {
		res.json({
			message: "Please Enter status",
			status: false,
		});
	} else {
		sql.query(`UPDATE Folder SET status = $1 WHERE id = $2;`,
			[req.body.status, req.body.id], async (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					if (result.rowCount === 1) {
						const data = await sql.query(`select * from Folder where id = $1`, [req.body.id]);
						res.json({
							message: "Folder Updated Successfully!",
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

Folder.update = (req, res) => {
	if (!req.body.name || req.body.name === '') {
		res.json({
			message: "Please Enter  name",
			status: false,
		});
	} else {
		sql.query(`UPDATE Folder SET name = $1 WHERE id = $2;`,
			[req.body.name, req.body.id], async (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					if (result.rowCount === 1) {
						const data = await sql.query(`select * from Folder where id = $1`, [req.body.id]);
						res.json({
							message: "Folder Updated Successfully!",
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


Folder.countAllImagesFolder = (req, res) => {
	sql.query(`SELECT folderid, COUNT(*) AS image_count FROM "images" WHERE  (userid = $1) GROUP BY "images".folderid `, [req.body.userID], (err, result) => {
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


Folder.delete = async (req, res) => {
	const data = await sql.query(`select * from Folder where userid = ${req.params.id}`);
		if (data.rows.length === 1) {
			sql.query(`DELETE FROM Folder WHERE id = $1;`, [req.params.id], (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					res.json({
						message: "Folder Deleted Successfully!",
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
		module.exports = Folder;