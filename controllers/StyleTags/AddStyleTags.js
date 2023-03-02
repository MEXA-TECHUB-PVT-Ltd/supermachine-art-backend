const StyleTags = require("../../models/StyleTags");

const AddStyleTags = async (req, res) => {
    try {
        const { AdvanceStylingID, Tags } = req.body;
        if (!Tags) {
            res.json({
                message: "Tag is required",
                status: false,
            });
        } else {
            const result = new StyleTags({ AdvanceStylingID, Tags });
            result.save();
            await res.json({
                message: " Style Tag Added Successfully!",
                status:true,
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
module.exports = AddStyleTags;