const sql = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const termOfUse = function (termOfUse) {
	this.title = termOfUse.title;
	this.content = termOfUse.content;;
};

termOfUse.create = async (req, res) => {
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
		sql.query(`CREATE TABLE IF NOT EXISTS public.termOfUses (
        id SERIAL,
        title text NOT NULL,
        content text,
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
				sql.query(`INSERT INTO termOfUses (id, title , content, createdAt ,updatedAt )
                            VALUES (DEFAULT, '${req.body.title}'  ,  '${req.body.content}', 'NOW()', 'NOW()') RETURNING * `, (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "Term Of Use Added Successfully!",
							status: true,
							result: result.rows,
						});
					}

				})

			};
		});
	}
}

termOfUse.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM termOfUses WHERE id = ${req.body.id};`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Term Of Use Details",
				status: true,
				result: result.rows
			});
		}
	});
}

termOfUse.viewAll = (req, res) => {
	sql.query(`SELECT * FROM termOfUses;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Term Of Use Details",
				status: true,
				result: result.rows,
			});
		}
	});

}

termOfUse.update = (req, res) => {
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
		sql.query(`UPDATE termOfUses SET title = '${req.body.title}', content = '${req.body.content}' WHERE id = ${req.body.id};`, async (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if(result.rowCount === 1){	
				const data = await sql.query(`select * from termOfUses where id = ${req.body.id}`);
				res.json({
					message: "Term Of Use Updated Successfully!",
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

termOfUse.delete = async (req, res) => {
	const data = await sql.query(`select * from termOfUses where id = ${req.params.id}`);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM termOfUses WHERE id = ${req.params.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "Term Of Use Deleted Successfully!",
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
module.exports = termOfUse;