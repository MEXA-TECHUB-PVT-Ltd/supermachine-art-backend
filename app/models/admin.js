const {sql} = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = function (admin) {
    this.email = admin.email;
    this.password = admin.password;
};
// BIGSERIAL
Admin.create = async (req, res) => {
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
        sql.query(`CREATE TABLE IF NOT EXISTS public.admins (
        id SERIAL,
        email text NOT NULL,
        password text,
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
                sql.query(`SELECT id FROM public.admins WHERE
                 email = $1`,
                 [req.body.email], (err, result) => {
                    if (err) {
                        res.json({
                            message: "Try Again",
                            status: false,
                            err
                        });
                    }
                    else {
                        if (result.rows.length > 0) {
                            res.json({
                                message: "Email Already Exists",
                                status: false,
                            });
                        } else {
                            if (result.rows.length == 0) {
                                sql.query(`INSERT INTO admins (id, email , password, createdAt, updatedAt )
                            VALUES (DEFAULT, $1  ,  $2, 'NOW()', 'NOW()')
                             RETURNING *`, [req.body.email,hashpassword],(err, result) => {
                                    if (err) {
                                        res.json({
                                            message: "Try Again!",
                                            status: true,
                                            err
                                        });
                                    } else {
                                        res.json({
                                            message: "Admin Added Successfully!",
                                            status: true,
                                            result: result.rows
                                        });
                                    }
                                });
                            }
                        }
                    }
                });

            };
        });
    }
}

Admin.login = async function (req, res) {
    sql.query(`SELECT * FROM admins WHERE email = $1`,[req.body.email], (err, result) => {
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
                        result: {
                            id: result.rows[0].id,
                            email: result.rows[0].email,
                            password: result.rows[0].password,
                            token: token
                        },
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

Admin.resetPassword = async function (req, res) {
    const { email, password, newPassword } = req.body;
    // const hashPassword = await bcrypt.hash(newPassword, salt);
    // const oldpassword = await bcrypt.hash(password, salt);
    sql.query(`SELECT * FROM admins WHERE email = $1`,[email], async (err, results) => {
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
                    message: "Admin Not Found",
                    status: false,
                });
            } else {
                if (bcrypt.compareSync(req.body.password, results.rows[0].password)) {
                    const salt = await bcrypt.genSalt(10);
                    const hashPassword = await bcrypt.hash(newPassword, salt);
                    sql.query(`UPDATE admins SET password = $1 WHERE
                     id = $2`,[hashPassword, results.rows[0].id], (err, result) => {
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
Admin.newPassword = async (req,res)=>{
    try{
        const email = req.body.email;
        const found_email_query = 'SELECT * FROM otp WHERE email = $1 AND status = $2'
        const result = await sql.query(found_email_query, [email , 'verified'])
        if(result.rowCount>0){
            const salt = await bcrypt.genSalt(10);
            let hashpassword = await bcrypt.hash(req.body.password, salt);    
            let query = 'UPDATE public.admins SET password = $1  WHERE email = $2 RETURNING*'
            let values = [hashpassword,email]
            let updateResult = await sql.query(query, values);
            updateResult = updateResult.rows[0]

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

module.exports = Admin;