const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const member_Sign_up = async (req, res) => {
    try {
        const { name, gender, phone, email, password } = req.body;
        const type = 'member';
        const status = 'unBlock';
        console.log(req.body);
        if (!name) {
            res.json({
                message:"Please Enter your Name as well",
                status: false,
            });
        }
        if (!gender) {
            res.json({
                message:"Please Select Gender",
                status: false,
            });
        }
        if (!phone) {
            res.json({
                message:"Please Enter your Phone No.",
                status: false,
            });
        }
        if (!email) {
            res.json({
                message:"Please Enter your Email",
                status: false,
            });
        }
        if (!password && password.length <= 8) {
            res.json({
                message:"Please Enter Password & must be min 8 characters",
                status: false,
            });
        }
        const exist = await User.findOne({ email });
        if (exist) {
            res.json({
                message:"Email Already Exists",
                status: false,
            });
        }
        const user = await new User({ name, gender, phone, email, password, type, status });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user.save();
        await res.json({
            message: "User Added Successfully!",
            status: true,
            result:user
        });
    } catch (err) {
        res.json({
            message: "Error",
            status: false,
        });
    }
};
module.exports = member_Sign_up;