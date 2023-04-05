const sql = require("./db");
const AdvanceStyling = function (AdvanceStyling) {
	this.styleType = AdvanceStyling.styleType;
};

AdvanceStyling.create = async (req, res) => {
	if (!req.body.styleType || req.body.styleType === '') {
		res.json({
			message: "Please Enter your style Type",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.AdvanceStylings (
        id BIGSERIAL,
        styleType text NOT NULL,
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
				sql.query(`INSERT INTO AdvanceStylings (id, styleType , createdAt ,updatedAt )
                            VALUES (DEFAULT, '${req.body.styleType}'  , 'NOW()', 'NOW()');`, (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "style Type Added Successfully!",
							status: true,
							result: {
								id: result.insertId,
								styleType: req.body.styleType,
							}
						});
					}

				})

			};
		});
	}
}

AdvanceStyling.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM AdvanceStylings WHERE id = ${req.params.id};`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "style Type  Details",
				status: true,
				result: result.rows
			});
		}
	});
}

AdvanceStyling.viewAll = (req, res) => {
	sql.query(`SELECT * FROM AdvanceStylings;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "style Type  Details",
				status: true,
				result: result.rows,
			});
		}
	});

}

AdvanceStyling.update = (req, res) => {
	if (!req.body.styleType || req.body.styleType === '') {
		res.json({
			message: "Please Enter your style Type",
			status: false,
		});
	} else {
		sql.query(`UPDATE AdvanceStylings SET styleType = '${req.body.styleType}' WHERE id = ${req.body.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: " style Type Updated Successfully!",
					status: true,
					result: {
						id: req.body.id,
						styleType: req.body.styleType,
					}
				});
			}
		});
	}
}

AdvanceStyling.delete = async (req, res) => {
	const data = await sql.query(`select * from AdvanceStylings where id = ${req.params.id}`);
	console.log(data.rows.length);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM AdvanceStylings WHERE id = ${req.params.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "style Type Deleted Successfully!",
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
module.exports = AdvanceStyling;