const StyleTags = require("../../models/StyleTags");

const AddStyleTags = async (req, res) => {
    try {
        const {AdvanceStylingID, Tags } = req.body;
        if (!Tags) {
            res.status(400).send("Tag is required");
        }
        const result =  new StyleTags({AdvanceStylingID, Tags });
        result.save();
        await res.json({
            message: " Style Tag Added Successfully!",
            result,
        });
    } catch (err) {
        res.json({
            message: " Style Tag Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddStyleTags;