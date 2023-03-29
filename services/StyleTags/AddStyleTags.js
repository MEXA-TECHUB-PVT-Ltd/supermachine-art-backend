// const StyleTags = require("../../models/StyleTags");
const db = require("../../models");
const StyleTags = db.StyleTags;
const Op = db.Sequelize.Op;
const AddStyleTags = async (req, res) => {
    try {
        const { id, Tags } = req.body;
        if (!Tags) {
            res.json({
                message: "Tag is required",
                status: false,
            });
        } else {
            const style = {
                AdvanceStylingID: id,
                Tags: Tags
            }
            StyleTags.create(style).then(result => {
                res.json({
                    message: " Style Tag Added Successfully!",
                    status: true,
                    result,
                });
            })

        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = AddStyleTags;