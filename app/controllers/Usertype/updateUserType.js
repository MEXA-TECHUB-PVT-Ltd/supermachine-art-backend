// const UserType = require("../../models/UserType");
const db = require("../../models");
const UserType = db.UserType;
const UpdateUserType = async (req, res) => {
    try {
        const { id, type } = req.body;
        await UserType.update(
            {
                type: type
            },
            {
                where: { id: id }
            }
        ).then((result) => {
            if (result == 1) {
                res.json({
                    message: "type  Updated Successfully!",
                    status: true,
                    result,
                });
            } else {
                res.json({
                    message: "type not Existeds!",
                    status: false,
                })
            }

        });
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = UpdateUserType;
