// const TermOfUse = require("../../models/termOfUse");

const db = require("../../models");
const TermOfUse = db.termOfUse;


const UpdateTermOfUse = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        const results = await TermOfUse.update(
            {
                title: title,
                content: content,
            },
            {
                where: { id: id }
            }
        );
        if (!results) {
            res.json({
                message: "Term Of Use not Exists!",
                status: false,
            });
        } else {
            if (results.includes(0)) {
                res.json({
                    message: "Term Of Use not Exists!",
                    status: false,
                });
            } else {
                const result = {
                    title: title,
                    content: content,
                }
                res.json({
                    message: "Term Of Use  Updated Successfully!",
                    status: true,
                    result,
                });
            }
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = UpdateTermOfUse;
