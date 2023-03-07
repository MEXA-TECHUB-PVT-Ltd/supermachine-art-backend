// const TermOfUse = require("../../models/termOfUse");
const db = require("../../models");
const TermOfUse = db.termOfUse;
// const Op = db.Sequelize.Op;
const AddTermOfUse = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            res.json({
                message: "title is required",
                status: false,
            });
        } else
            if (!content) {
                res.json({
                    message: "content is required",
                    status: false,
                });
            } else {
                // const result = await new TermOfUse({ title, content });
                const termofuse = {
                    title: title,
                    content: content,
                }
                TermOfUse.create(termofuse).then(result => {
                    res.json({
                        message: "Term Of Use Added Successfully!",
                        status: true,
                        result,
                    });
                });
            }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = AddTermOfUse;