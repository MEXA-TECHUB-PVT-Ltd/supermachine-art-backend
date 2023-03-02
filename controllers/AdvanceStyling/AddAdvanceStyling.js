const AdvanceStyling = require("../../models/AdvanceStyling");

const AddAdvanceStyling = async (req, res) => {
    try {
        const { styleType } = req.body;
        if (!styleType) {
            res.json({
                message: "style Type is required",
                status: false,
            })
        }
        const result =  new AdvanceStyling({ styleType });
        result.save();
        await res.json({
            message: "style Type Added Successfully!",
            status: false,
            result,
        });
    } catch (err) {
        res.json({
            message: "style Type Addition failed!",
            status: false,
        });
    }
};
module.exports = AddAdvanceStyling;