const sql = require("./db");
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
                            VALUES (DEFAULT, '${req.body.userID}', '${req.body.name}'  ,  '${req.body.status}', 'NOW()', 'NOW()') RETURNING * `, (err, result) => {
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
	sql.query(`SELECT * FROM Folder WHERE ( id = '${req.body.id}' AND userID = '${req.body.userID}');`, (err, result) => {
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
				result: result.rows
			});
		}
	});
}

Folder.viewUserAllFolders = (req, res) => {
	sql.query(`SELECT * FROM Folder WHERE userid = '${req.params.id}'`, (err, result) => {
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

Folder.getAllPrivateFolder = (req, res) => {
	sql.query(`SELECT * FROM Folder WHERE status = 'private'`, (err, result) => {
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
	sql.query(`SELECT * FROM Folder WHERE status = 'public'`, (err, result) => {
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
		sql.query(`UPDATE Folder SET status = '${req.body.status}' WHERE id = ${req.body.id};`, async (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if(result.rowCount === 1){	
				const data = await sql.query(`select * from Folder where id = ${req.body.id}`);
				res.json({
					message: "Folder Updated Successfully!",
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

Folder.update = (req, res) => {
	if (!req.body.name || req.body.name === '') {
		res.json({
			message: "Please Enter  name",
			status: false,
		});
	} else {
		sql.query(`UPDATE Folder SET name = '${req.body.name}' WHERE id = ${req.body.id};`, async (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if(result.rowCount === 1){	
				const data = await sql.query(`select * from Folder where id = ${req.body.id}`);
				res.json({
					message: "Folder Updated Successfully!",
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

Folder.delete = async (req, res) => {
	const data = await sql.query(`select * from Folder where id = ${req.params.id}`);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM Folder WHERE id = ${req.params.id};`, (err, result) => {
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