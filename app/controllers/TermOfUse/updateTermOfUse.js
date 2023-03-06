// const TermOfUse = require("../../models/termOfUse");

const db = require("../../models");
const TermOfUse = db.termOfUse;


const UpdateTermOfUse = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        const result = await TermOfUse.update(
            {
                title: title,
                content: content,
            },
            {
                where: { id: id }
            }
        );
        if (!result) {
            res.json({
                message: "Term Of Use not Exists!",
                status: false,
            });
        } else {
            res.json({
                message: "TermOfUse Updated Successfully!",
                status: true,
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
module.exports = UpdateTermOfUse;
