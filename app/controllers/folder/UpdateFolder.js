// const User = require("../../models/User");
const db = require("../../models");
const Folder = db.Folder;

const ChangeStatus = async (req, res) => {
    try {
        const { id, name } = req.body;
        const result = await Folder.update(
            {
                name: name,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "No Folder Found try Again!",
                status: false,
            });
        } else {
            res.json({
                message: "Folder Updated Successfully!",
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
