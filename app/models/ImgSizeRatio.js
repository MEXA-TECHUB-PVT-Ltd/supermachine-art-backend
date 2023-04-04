// module.exports = (sequelize, Sequelize) => {
// 	const ImageSizeRatio = sequelize.define("ImageSizeRatio", {
// 	imageSize: {
// 		type: Sequelize.STRING,
// 		required: true,
// 	},
// });

// return ImageSizeRatio
// };

const sql = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ImageSizeRatio = function (ImageSizeRatio) {
	this.imageSize = ImageSizeRatio.imageSize;
};

ImageSizeRatio.create = async (req, res) => {
	if (!req.body.imageSize || req.body.imageSize === '') {
		res.json({
			message: "Please Enter  image Size",
			status: false,
		});
	} 
	 else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.ImageSizeRatios (
        id SERIAL,
        imageSize text NOT NULL,
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
				sql.query(`INSERT INTO ImageSizeRatios (id, imageSize , createdAt ,updatedAt )
                            VALUES (DEFAULT, '${req.body.imageSize}'  ,  'NOW()', 'NOW()') RETURNING * `, (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "image Size Added Successfully!",
							status: true,
							result: result.rows,
						});
					}

				})

			};
		});
	}
}

ImageSizeRatio.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM ImageSizeRatios WHERE id = ${req.body.id};`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "image Size Details",
				status: true,
				result: result.rows
			});
		}
	});
}

ImageSizeRatio.viewAll = (req, res) => {
	sql.query(`SELECT * FROM ImageSizeRatios;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "image Size Details",
				status: true,
				result: result.rows,
			});
		}
	});

}

ImageSizeRatio.update = (req, res) => {
	if (!req.body.imageSize || req.body.imageSize === '') {
		res.json({
			message: "Please Enter your image Size",
			status: false,
		});
	} else {
		sql.query(`UPDATE ImageSizeRatios SET imageSize = '${req.body.imageSize}' WHERE id = ${req.body.id};`, async (err, result) => {
			if (err) {
				console.log(err);
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if(result.rowCount === 1){	
				const data = await sql.query(`select * from ImageSizeRatios where id = ${req.body.id}`);
				res.json({
					message: "image Size Updated Successfully!",
					status: true,
					result:  data.rows,
				});
			}else if(result.rowCount === 0){
				res.json({
                    message: "Not Found",
                    status: false,
                });
			}
			}
		});
	}
}

ImageSizeRatio.delete = async (req, res) => {
	const data = await sql.query(`select * from ImageSizeRatios where id = ${req.params.id}`);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM ImageSizeRatios WHERE id = ${req.params.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "image Size Deleted Successfully!",
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
module.exports = ImageSizeRatio;