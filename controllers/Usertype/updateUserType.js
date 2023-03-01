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
                status:false,
            });
        } else {
            res.json({
                message: "type  Updated Successfully!",
                status:true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = UpdateUserType;
