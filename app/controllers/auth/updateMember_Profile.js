// const User = require("../../models/User");
const db = require("../../models");
const bcrypt = require("bcryptjs");
const User = db.user;

const updateMember_Profile = async (req, res) => {
    try {
        const { id, email, password, type } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const result = await User.update(
            {
                email: email,
                password: hashPassword,
                type: type,
            },
            { where: { id: id } })
        if (!result) {
            res.json({
                message: "Profile Not Updated!",
                status: false,
            });
        } else {
            res.json({
                message: "Member Profile updated",
                status: true,
                result: result,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            status: false,
        });
    }
};
module.exports = updateMember_Profile;
