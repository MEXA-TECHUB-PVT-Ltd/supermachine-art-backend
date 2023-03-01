const UserType = require("../../models/UserType");

const UpdateUserType = async (req, res) => {
    try {
        const { _id, type } = req.body;
        const result = await UserType.findOneAndUpdate({ _id: _id },
            {
                type: type,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "type not Existeds!",
                result,
            });
        } else {
            res.json({
                message: "type  Updated Successfully!",
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "type Updation Failed!",
            status: "none",
            err
        });
    }
};
module.exports = UpdateUserType;
