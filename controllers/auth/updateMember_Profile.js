const User = require("../../models/User");

const updateMember_Profile = async (req, res) => {
    try {
        const { _id, email, password, type } = req.body;
        const photo = req.file.path;
        const result = await User.findOneAndUpdate({ _id: _id },
            {
                email: email,
                password: password,
                type: type,
            },
            {
                new: true
            })
        console.log(`result is : ${result}`);
        if (!result) {
            res.json({
                message: "Profile Not Updated!",
                result: result,
                statusCode: 201
            });
        } else {
            res.json({
                message: "Member Profile updated",
                result: result,
                statusCode: 201,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            status: "none",
            err
        });
    }
};
module.exports = updateMember_Profile;
