// const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const db = require("../../models");
const User = db.user;
const member_Sign_up = async (req, res) => {
    try {
        const { name, gender, phone, email, password } = req.body;
        const type = 'member';
        const status = 'unBlock';
        if (!name) {
            res.json({
                message: "Please Enter your Name as well",
                status: false,
            });
        }
        if (!gender) {
            res.json({
                message: "Please Select Gender",
                status: false,
            });
        }
        if (!phone) {
            res.json({
                message: "Please Enter your Phone No.",
                status: false,
            });
        }
        if (!email) {
            res.json({
                message: "Please Enter your Email",
                status: false,
            });
        }
        if (!password && password.length <= 8) {
            res.json({
                message: "Please Enter Password & must be min 8 characters",
                status: false,
            });
        }
        const exist = await User.findOne({ where: { email: email } });
        if (exist) {
            res.json({
                message: "Email Already Exists",
                status: false,
            });
        } else {
            const salt = await bcrypt.genSalt(10);
            let HashPassword = await bcrypt.hash(password, salt);
            const user = {
                name: name,
                gender: gender,
                phone: phone,
                email: email,
                password: HashPassword,
                type: type,
                status: status,
            }
            User.create(user).then(result => {
                res.json({
                    message: "User Added Successfully!",
                    status: true,
                    result
                });
            })
        }
    } catch (err) {
        res.json({
            message: "Error",
            status: false,
        });
    }
};
module.exports = member_Sign_up;