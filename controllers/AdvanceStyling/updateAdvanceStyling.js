const AdvanceStyling = require("../../models/AdvanceStyling");

const UpdateAdvanceStyling = async (req, res) => {
    try {
        const { _id, styleType } = req.body;
        const result = await AdvanceStyling.findOneAndUpdate({ _id: _id },
            {
                styleType: styleType,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "style Type not Existeds!",
                result,
            });
        } else {
            res.json({
                message: "style Type  Updated Successfully!",
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "style Type Updation Failed!",
            status: "none",
            err
        });
    }
};
module.exports = UpdateAdvanceStyling;
