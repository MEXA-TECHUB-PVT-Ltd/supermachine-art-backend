// const StyleTags = require("../../models/StyleTags");
const db = require("../../models");
const StyleTags = db.StyleTags;

const UpdateStyleTags = async (req, res) => {
    try {
        const { id, Tags } = req.body;
        const result = await StyleTags.update(
            {
                Tags: Tags,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "Style Tag not Existeds!",
                status: false,
            });
        } else {
            res.json({
                message: "Style Tag Updated Successfully!",
                status: true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: False,
        });
    }
};
module.exports = UpdateStyleTags;
