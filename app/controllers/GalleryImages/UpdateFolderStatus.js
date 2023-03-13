// const User = require("../../models/User");
const db = require("../../models");
const Folder = db.Folder;

const ChangeStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        const result = await Folder.update(
            {
                status: status,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "Try Again!",
                status: false,
            });
        } else {
            res.json({
                message: "Folder Status Updated Successfully!",
                status: true,
                result: result,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            result: false,
        });
    }
};
module.exports = ChangeStatus;
