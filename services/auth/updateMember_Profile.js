// const User = require("../../models/User");
const db = require("../../models");
const bcrypt = require("bcryptjs");
const User = db.user;

const updateMember_Profile = async (req, res) => {
    try {
        const { id, email, password, type } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const results = await User.update(
            {
                email: email,
                password: hashPassword,
                type: type,
            },
            { where: { id: id } })
        if (!results) {
            res.json({
                message: "Profile Not Updated!",
                status: false,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "Profile not Exists!",
                    status: false,
                });    
            }else {
            const result = {
                email: email,
                password: hashPassword,
                type: type,
            }
            res.json({
                message: "Profile  Updated Successfully!",
                status: true,
                result,
            });
        }
        }
    } catch (err) {
        res.json({
            message: "error",
            status: false,
        });
    }
};
module.exports = updateMember_Profile;
