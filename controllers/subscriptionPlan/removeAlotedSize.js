const Plan = require("../../models/subscriptionPlan");

const removeAlotedSize = async (req, res) => {
    try {
        const { plan_id, imageSize } = req.body;
        const result = await Plan.findOneAndUpdate({ _id: plan_id },
            {
                $pull: { imageDownloadSize: imageSize }
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Plan not Existeds!",
                status:false
            });
        } else {
            res.json({
                message: "Plan Updated Successfully!",
                status:true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Error",
            status: false,
        });
    }
};
module.exports = removeAlotedSize;
