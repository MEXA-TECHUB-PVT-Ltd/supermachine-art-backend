const Plan = require("../../models/subscriptionPlan");

const UpdateSubscriptionPlan = async (req, res) => {
    try {
        const { _id, price,imageDownloadSize,imageSearches } = req.body;
        const result = await Plan.findOneAndUpdate({ _id: _id },
            {
                price: price,
                imageDownloadSize: imageDownloadSize,
                imageSearches: imageSearches,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Plan not Existeds!",
                status:false,
                result,
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
            message: "Error!",
            status:false,
        });
    }
};
module.exports = UpdateSubscriptionPlan;
