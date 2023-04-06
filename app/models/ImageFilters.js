
const {sql} = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ImageFilters = function (ImageFilters) {
	this.name = ImageFilters.name;
	this.status = ImageFilters.status;;
};

ImageFilters.create = async (req, res) => {
	if (!req.body.name || req.body.name === '') {
		res.json({
			message: "Please Enter your name",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.ImageFilters (
        id SERIAL,
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
				sql.query(`INSERT INTO ImageFilters (id, name , status, createdAt ,updatedAt )
                            VALUES (DEFAULT, '${req.body.name}'  ,  '${true}', 'NOW()', 'NOW()') RETURNING * `, (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "Image Filter Added Successfully!",
							status: true,
							result: result.rows,
						});
					}

				})

			};
		});
	}
}

ImageFilters.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM ImageFilters WHERE id = ${req.body.id};`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Image Filter Details",
				status: true,
				result: result.rows
			});
		}
	});
}

ImageFilters.viewEnable = (req, res) => {
	sql.query(`SELECT * FROM ImageFilters WHERE status = 'true'`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Image Filter Details",
				status: true,
				result: result.rows
			});
		}
	});
}
ImageFilters.viewDisable = (req, res) => {
	sql.query(`SELECT * FROM ImageFilters WHERE status = 'false'`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Image Filter Details",
				status: true,
				result: result.rows
			});
		}
	});
}


ImageFilters.viewAll = (req, res) => {
	sql.query(`SELECT * FROM ImageFilters;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Image Filter Details",
				status: true,
				result: result.rows,
			});
		}
	});

}


ImageFilters.Enable_DisableFilter = (req, res) => {
if (req.body.status === '') {
		res.json({
			message: "Please Enter your status",
			status: false,
		});
	} else {
		sql.query(`UPDATE ImageFilters SET status = '${req.body.status}' WHERE id = ${req.body.id};`, async (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if(result.rowCount === 1){	
				const data = await sql.query(`select * from ImageFilters where id = ${req.body.id}`);
				res.json({
					message: "Image Filter Updated Successfully!",
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

ImageFilters.update = (req, res) => {
	if (!req.body.name || req.body.name === '') {
		res.json({
			message: "Please Enter  name",
			status: false,
		});
	} else {
		sql.query(`UPDATE ImageFilters SET name = '${req.body.name}' WHERE id = ${req.body.id};`, async (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if(result.rowCount === 1){	
				const data = await sql.query(`select * from ImageFilters where id = ${req.body.id}`);
				res.json({
					message: "Image Filter Updated Successfully!",
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

ImageFilters.delete = async (req, res) => {
	const data = await sql.query(`select * from ImageFilters where id = ${req.params.id}`);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM ImageFilters WHERE id = ${req.params.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "Image Filter Deleted Successfully!",
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
module.exports = ImageFilters;