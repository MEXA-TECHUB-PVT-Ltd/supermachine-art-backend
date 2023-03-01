const User = require("../../models/User");

const updateMember_Profile = async (req, res) => {
    try {
        const { _id, email, password, type } = req.body;
        console.log(req.body)
        const result = await User.findOneAndUpdate({ _id: _id },
            {
                email: email,
                password: password,
                type: type,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Profile Not Updated!",
                status:false,
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
