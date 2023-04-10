const {sql} = require("../config/db.config");

const userstypes = function (UserType) {
	this.type = UserType.type;
};

userstypes.create = async (req, res) => {
	if (!req.body.type || req.body.type === '') {
		res.json({
			message: "Please Enter your User Type",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.UserTypes (
        id SERIAL,
        type text NOT NULL,
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
				sql.query(`INSERT INTO UserTypes (id, type , createdAt ,updatedAt )
                            VALUES (DEFAULT, '${req.body.type}'  , 'NOW()', 'NOW()') RETURNING * `, (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "User Type Added Successfully!",
							status: true,
							result: result.rows,
						});
					}

				})

			};
		});
	}
}

userstypes.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM UserTypes WHERE id = ${req.body.id};`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "User Type  Details",
				status: true,
				result: result.rows
			});
		}
	});
}

userstypes.viewAll = (req, res) => {
	sql.query(`SELECT * FROM UserTypes;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "User Type  Details",
				status: true,
				result: result.rows,
			});
		}
	});

}

userstypes.update = (req, res) => {
	if (!req.body.type || req.body.type === '') {
		res.json({
			message: "Please Enter your User Type",
			status: false,
		});
	} else {
		sql.query(`UPDATE UserTypes SET type = '${req.body.type}' WHERE id = ${req.body.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if (result.rowCount === 1) {
					res.json({
						message: " User Type Updated Successfully!",
						status: true,
						result: {
							id: req.body.id,
							type: req.body.type,
						}
					});
				} else if (result.rowCount === 0) {
					res.json({
						message: "User Type Not Found!",
						status: false,
					});
				}
			}
		});
	}
}

userstypes.delete = async (req, res) => {
	const data = await sql.query(`select * from UserTypes where id = ${req.params.id}`);
	console.log(data.rows.length);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM UserTypes WHERE id = ${req.params.id};`, (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "User Type Deleted Successfully!",
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
module.exports = userstypes;