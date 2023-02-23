const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const member_Sign_up = async (req, res) => {
    try {
        const { name, gender, phone, email, password } = req.body;
        const type = 'visitor';
        const status = 'unBlock';
        if (!name) {
            res.status(400).send("name is required");
        }
        if (!gender) {
            res.status(400).send("gender is required");
        }
        if (!phone) {
            res.status(400).send("phone is required");
        }
        if (!email) {
            res.status(400).send("email is required");
        }
        if (!password && password.length <= 8) {
            console.log(`Password`);
            res.status(400).send("password is required and must be of minimum 8 characters");
        }
        const exist = await User.findOne({ email });
        if (exist) {
            console.log(`exists`);
            res.status(200).send("Email is already taken");
        }
        const user = await new User({ name, gender, phone, email, password, type, status });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user.save();
        await res.json({
            ok: "true",
            statusCode: 201,
            user,
        });
    } catch (err) {
        res.json({
            message: "error",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = member_Sign_up;