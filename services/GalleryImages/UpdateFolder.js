// const User = require("../../models/User");
const db = require("../../models");
const Folder = db.Folder;

const ChangeStatus = async (req, res) => {
    try {
        const { id, name } = req.body;
        const results = await Folder.update(
            {
                name: name,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "No Folder Found try Again!",
                status: false,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "Folder not Exists!",
                    status: false,
                });    
            }else {
            const result = {
                styleType:styleType,
            }
            res.json({
                message: "Folder Updated Successfully!",
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
