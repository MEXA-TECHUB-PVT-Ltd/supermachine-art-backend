const sql = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// resolution: {
// 	type: Sequelize.STRING,
// 	required: true,
// 	//like width * height
// },
const ImageAspects = function (ImageAspects) {
	this.name = ImageAspects.name;
	this.resolution = ImageAspects.resolution;;
};

ImageAspects.create = async (req, res) => {
	if (!req.body.name || req.body.name === '') {
		res.json({
			message: "Please Enter Aspect name",
			status: false,
		});
	} else if (!req.body.resolution) {
		res.json({
			message: "Please Enter resolution",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.ImageAspects (
        id SERIAL,
        name text NOT NULL,
        resolution text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));` , (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				sql.query(`INSERT INTO ImageAspects (id, name , resolution, createdAt ,updatedAt )
                            VALUES (DEFAULT, '${req.body.name}'  ,  '${req.body.resolution}', 'NOW()', 'NOW()');`, (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: " Image Aspects Added Successfully!",
							status: true,
							result: {
								id: result.insertId,
								name: req.body.name,
								resolution: req.body.resolution,
							}
						});
					}

				})

			};
		});
	}
}

ImageAspects.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM ImageAspects WHERE id = ${req.body.id};`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Image Aspects Details",
				status: true,
				result: result.rows
			});
		}
	});
}

ImageAspects.viewAll = (req, res) => {
	sql.query(`SELECT * FROM ImageAspects;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Image Aspects Details",
				status: true,
				result: result.rows,
			});
		}
	});

}

ImageAspects.update = (req, res) => {
	if (!req.body.name || req.body.name === '') {
		res.json({
			message: "Please Enter your name",
			status: false,
		});
	} else if (req.body.resolution === '') {
		res.json({
			message: "Please Enter your resolution",
			status: false,
		});
	} else {
		sql.query(`UPDATE ImageAspects SET name = '${req.body.name}', resolution = '${req.body.resolution}' WHERE id = ${req.body.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if (result.rowCount === 1) {
					res.json({
						message: "Image Aspects Updated Successfully!",
						status: true,
						result: {
							id: req.body.id,
							name: req.body.name,
							resolution: req.body.resolution,
						}
					})
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

ImageAspects.delete = async (req, res) => {
	const data = await sql.query(`select * from ImageAspects where id = ${req.params.id}`);
	console.log(data.rows.length);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM ImageAspects WHERE id = ${req.params.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: " Image Aspects Deleted Successfully!",
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
module.exports = ImageAspects;