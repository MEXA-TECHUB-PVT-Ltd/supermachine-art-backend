const AdvanceStyling = require("../../models/AdvanceStyling");

const AddAdvanceStyling = async (req, res) => {
    try {
        const { styleType } = req.body;
        if (!styleType) {
            res.status(400).send("style Type is required");
        }
        const result =  new AdvanceStyling({ styleType });
        result.save();
        await res.json({
            message: "style Type Added Successfully!",
            result,
        });
    } catch (err) {
        res.json({
            message: "style Type Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddAdvanceStyling;