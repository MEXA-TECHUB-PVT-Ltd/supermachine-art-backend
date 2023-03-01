const StyleTags = require("../../models/StyleTags");

const UpdateStyleTags = async (req, res) => {
    try {
        const { _id, Tags } = req.body;
        const result = await StyleTags.findOneAndUpdate({ _id: _id },
            {
                Tags: Tags,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Style Tag not Existeds!",
                result,
            });
        } else {
            res.json({
                message: "Style Tag Updated Successfully!",
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Style Tag Updation Failed!",
            status: "none",
            err
        });
    }
};
module.exports = UpdateStyleTags;
