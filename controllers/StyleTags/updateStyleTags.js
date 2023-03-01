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
