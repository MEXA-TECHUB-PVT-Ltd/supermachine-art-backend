const {sql} = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const LicenseAgreement = function (LicenseAgreement) {
	this.title = LicenseAgreement.title;
	this.content = LicenseAgreement.content;;
};

LicenseAgreement.create = async (req, res) => {
	if (!req.body.title || req.body.title === '') {
		res.json({
			message: "Please Enter your title",
			status: false,
		});
	} else if (!req.body.content) {
		res.json({
			message: "Please Enter content",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.LicenseAgreements (
        id SERIAL,
        title text NOT NULL,
        content text,
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
				sql.query(`INSERT INTO LicenseAgreements (id, title , content, createdAt ,updatedAt )
                            VALUES (DEFAULT, '${req.body.title}'  ,  '${req.body.content}', 'NOW()', 'NOW()');`, (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "License Agreement Added Successfully!",
							status: true,
							result: {
								id: result.insertId,
								title: req.body.title,
								content: req.body.content,
							}
						});
					}

				})

			};
		});
	}
}

LicenseAgreement.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM LicenseAgreements WHERE id = ${req.params.id};`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "License Agreement Details",
				status: true,
				result: result.rows
			});
		}
	});
}

LicenseAgreement.viewAll = (req, res) => {
	sql.query(`SELECT * FROM LicenseAgreements;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "License Agreement Details",
				status: true,
				result: result.rows,
			});
		}
	});

}

LicenseAgreement.update = (req, res) => {
	if (!req.body.title || req.body.title === '') {
		res.json({
			message: "Please Enter your title",
			status: false,
		});
	} else if (req.body.content === '') {
		res.json({
			message: "Please Enter your content",
			status: false,
		});
	} else {
		sql.query(`UPDATE LicenseAgreements SET title = '${req.body.title}', content = '${req.body.content}' WHERE id = ${req.body.id};`, async (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				const data = await sql.query(`select * from LicenseAgreements where id = ${req.params.id}`);
				res.json({
					message: "License Agreement Updated Successfully!",
					status: true,
					result:  data.rows,
				});
			}
		});
	}
}

LicenseAgreement.delete = async (req, res) => {
	const data = await sql.query(`select * from LicenseAgreements where id = ${req.params.id}`);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM LicenseAgreements WHERE id = ${req.params.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "License Agreement Deleted Successfully!",
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
module.exports = LicenseAgreement;