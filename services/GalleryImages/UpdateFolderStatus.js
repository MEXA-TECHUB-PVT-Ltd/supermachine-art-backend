// const User = require("../../models/User");
const db = require("../../models");
const Folder = db.Folder;

const ChangeStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        const results = await Folder.update(
            {
                status: status,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "Try Again!",
                status: false,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "Folder Exists!",
                    status: false,
                });    
            }else {
            const result = {
                status: status,
            }
            res.json({
                message: " Folder Status  Updated Successfully!",
                status: true,
                result,
            });
        }
        }
    } catch (err) {
        res.json({
            message: "error",
            result: false,
        });
    }
};
module.exports = ChangeStatus;
