// module.exports = (sequelize, Sequelize) => {
// 	const User = sequelize.define("User", {
// 		name: {
// 			type: Sequelize.STRING,
// 		},
// 		gender: {
// 			type: Sequelize.STRING,
// 		},
// 		phone: {
// 			type: Sequelize.STRING,
// 		},
// 		profileImage: {
// 			type: Sequelize.STRING,
// 		},
// 		email: {
// 			type: Sequelize.STRING,
// 			required: true,
// 		},
// 		password: {
// 			type: Sequelize.STRING,
// 			required: true,
// 		},
// 		type: {
// 			type: Sequelize.STRING,
// 			required: true,
// 			// enum: ['visitor', 'member', 'subscriber']
// 		},
// 		status: {
// 			type: Sequelize.STRING,
// 			// enum: ['unBlock', 'blocked']
// 		},

// 	});
// 	return User;
// };

const sql = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = function (User) {
	this.name = User.name;
	this.gender = User.gender;
	this.phone = User.phone
	this.profileImage = User.profileImage;
	this.email = User.email;
	this.password = User.password;
	this.type = User.type;
	this.status = User.status;
};
User.create = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.User (
        id SERIAL NOT NULL,
		name text,
        gender text ,
        phone text,
		profileImage text,
		email text ,
        password text ,
        type text,
		status text,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id))  ` , async (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			if (!req.body.email || req.body.email === '') {
				res.json({
					message: "Please Enter your Email",
					status: false,
				});
			} else if (!req.body.password) {
				res.json({
					message: "Please Enter Password",
					status: false,
				});
			} else {
				const salt = await bcrypt.genSalt(10);
				let hashpassword = await bcrypt.hash(req.body.password, salt);

				const { name, gender, phone, email } = req.body;
				const profileImage = '';
				const type = 'member';
				const status = 'unBlock';
				const query = `INSERT INTO "user" (id,name, gender,phone,profileImage,email,password ,type , status, createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, 'NOW()','NOW()' ) RETURNING * `;
				const foundResult = await sql.query(query,
					[name, gender, phone, profileImage, email, hashpassword, type, status]);
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
							message: "User Added Successfully!",
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

			};
		}

	});
}

User.login = async function (req, res) {
	sql.query(`SELECT * FROM "user" WHERE email = $1`, [req.body.email], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		}
		else {
			if (result.rows.length == 0) {
				res.json({
					message: "User Not Found",
					status: false,
				});
			} else {
				if (bcrypt.compareSync(req.body.password, result.rows[0].password)) {
					const token = jwt.sign({ id: result.rows[0].id }, 'IhTRsIsUwMyHAmKsA', {
						expiresIn: "7d",
					});
					res.json({
						message: "Login Successful",
						status: true,
						result: result.rows,
						token
					});
				} else {
					res.json({
						message: "Invalid Password",
						status: false,
					});
				}
			}
		}
	});
}


User.GetAUser = (req, res) => {
	sql.query(`SELECT * FROM User WHERE ( id = $1)`, [req.body.id], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "User Details",
				status: true,
				result: result.rows
			});
		}
	});
}

User.resetPassword = async function (req, res) {
	const { email, password, newPassword } = req.body;
	// const hashPassword = await bcrypt.hash(newPassword, salt);
	// const oldpassword = await bcrypt.hash(password, salt);
	sql.query(`SELECT * FROM "user" WHERE email = $1`, [email], async (err, results) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		}
		else {
			if (results.rows.length == 0) {
				res.json({
					message: "User Not Found",
					status: false,
				});
			} else {
				if (bcrypt.compareSync(req.body.password, results.rows[0].password)) {
					const salt = await bcrypt.genSalt(10);
					const hashPassword = await bcrypt.hash(newPassword, salt);
					sql.query(`UPDATE "user" SET password = $1 WHERE id = $2`, [hashPassword, results.rows[0].id], (err, result) => {
						if (err) {
							console.log(err);
							res.json({
								message: "Try Again",
								status: false,
								err
							});
						}
						else {
							res.json({
								message: "Password Changed Successfully",
								status: true,
								results: results.rows
							});
						}
					})
				}
				else {
					res.json({
						message: "Incorrect Password",
						status: false,
					});
				}

			}
		}
	});

}


User.viewAllUsers = (req, res) => {
	sql.query(`SELECT * FROM "user" `, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "User Details",
				status: true,
				result: result.rows
			});
		}
	});
}

User.ViewAllBlockedUsers = (req, res) => {
	sql.query(`SELECT * FROM "user" WHERE status = $1`, ['block'], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "User Details",
				status: true,
				result: result.rows
			});
		}
	});
}
User.ViewAllSubscribedUser = (req, res) => {
	sql.query(`SELECT * FROM "user" WHERE type = $1`, ['subscriber'], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Subscribed User Details",
				status: true,
				result: result.rows
			});
		}
	});
}

User.SpecificUser = (req, res) => {
	sql.query(`SELECT * FROM "user" WHERE id = $1`, [req.body.id], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Subscribed User Details",
				status: true,
				result: result.rows
			});
		}
	});
}
User.AllMemberUsers = (req, res) => {
	sql.query(`SELECT * FROM "user" WHERE type = $1`, ['member'], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "Subscribed User Details",
				status: true,
				result: result.rows
			});
		}
	});
}


User.viewAll = (req, res) => {
	sql.query(`SELECT * FROM User;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "User Details",
				status: true,
				result: result.rows,
			});
		}
	});

}


User.changeStatus = (req, res) => {
	if (req.body.status === '') {
		res.json({
			message: "Please Enter status",
			status: false,
		});
	} else {
		sql.query(`UPDATE "user" SET status = $1 WHERE id = $2;`, [req.body.status, req.body.id], async (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				if (result.rowCount === 1) {
					const data = await sql.query(`select * from "user" where id = $1`, [req.body.id]);
					res.json({
						message: "User Updated Successfully!",
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

User.updateProfile = async (req, res) => {
	if (req.body.id === '') {
		res.json({
			message: "id is required",
			status: false,
		});
	} else {
		const userData = await sql.query(`select * from "user" where id = $1`, [req.body.id]);
		const oldName = userData.rows[0].name;
		const oldGender = userData.rows[0].gender;
		const oldPhone = userData.rows[0].phone;
		const oldEmail = userData.rows[0].email;

		let { id, name, gender, phone, email } = req.body;
		let photo = userData.rows[0].photo;
		if (req.file) {
			const { path } = req.file;
			photo = path;
		}
		if (name === undefined || name === '') {
			name = oldName;
		}
		if (gender === undefined || gender === '') {
			gender = oldGender;
		}
		if (phone === undefined || phone === '') {
			phone = oldPhone;
		}
		if (email === undefined || email === '') {
			email = oldEmail;
		}
		sql.query(`UPDATE "user" SET name = $1, gender = $2, 
		phone = $3, profileImage = $4, email = $5  WHERE id = $6;`,
			[name, gender, phone, photo, email, id], async (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					if (result.rowCount === 1) {
						const data = await sql.query(`select * from "user" where id = $1`, [req.body.id]);
						res.json({
							message: "User Updated Successfully!",
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


User.delete = async (req, res) => {
	const data = await sql.query(`select * from "user" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM "user" WHERE id = $1;`, [req.params.id], (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "User Deleted Successfully!",
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

User.newPassword = async (req,res)=>{
    try{
        const email = req.body.email;
        const found_email_query = 'SELECT * FROM otp WHERE email = $1 AND status = $2'
        const result = await sql.query(found_email_query, [email , 'verified'])
        if(result.rowCount>0){
            const salt = await bcrypt.genSalt(10);
            let hashpassword = await bcrypt.hash(req.body.password, salt);    
            let query = `UPDATE "user" SET password = $1  WHERE email = $2 RETURNING*`
            let values = [hashpassword,email]
            let updateResult = await sql.query(query, values);
            updateResult = updateResult.rows[0];
			console.log(result.rows);
			sql.query(`DELETE FROM otp WHERE id = $1;`, [result.rows[0].id], (err, result) => {});
            res.json({
                message: "Password changed",
                status: true,
                result: updateResult
            })
        }
        else{
            res.json({
                message : "Email Not Found ",
                status:false
            })
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({
          message: `Internal server error occurred`,
          success:false,
        });
      }
}


module.exports = User;