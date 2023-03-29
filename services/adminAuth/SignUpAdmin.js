// const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const db = require("../../models");
const Admin = db.admin;

const SignUpAdmin = async (req, res) => {
try {
    const { email, password } = req.body;
    if (!email) {
        res.json({
            message: "Please Enter your Email",
            status: false,
        });
    } else if (!password) {
        res.json({
            message: "Please Enter Password",
            status: false,
        });
    } else {
        const exist = await Admin.findOne({
            where: { email: email },
        });
        if (exist) {
            res.json({
                message: "Email Already Exists",
                status: false,
            });
        } else {
            // const admin = await new Admin({ email, password });
            const salt = await bcrypt.genSalt(10);
            let hashpassword = await bcrypt.hash(password, salt);
            // admin.save();
            const admin = {
                email: email,
                password: hashpassword
            }
            // const result = await new PrivacyPolicy({ title, content });
            Admin.create(admin).then(result => {
                res.json({
                    message: "Admin Added Successfully!",
                    status: true,
                    result: result
                });
            })

        }
    }
} catch (err) {
    res.json({
        message: "Error",
        status: false,
    });
}
};
module.exports = SignUpAdmin;