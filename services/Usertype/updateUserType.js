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
        ).then((results) => {
            if (results.includes(0)) {
                res.json({
                    message: "User Type not Exists!",
                    status: false,
                });
            } else {
                const result = {
                    type: type
                }
                res.json({
                    message: "User Type  Updated Successfully!",
                    status: true,
                    result,
                });
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
