const Plan = require("../../models/subscriptionPlan");

const UpdateSubscriptionPlan = async (req, res) => {
    try {
        const { _id, price,imageDownloadSize,imageSearches } = req.body;
        console.log(req.body.imageSearches);
        const result = await Plan.findOneAndUpdate({ _id: _id },
            {
                price: price,
                imageDownloadSize: imageDownloadSize,
                imageSearches: imageSearches,
            },
            {
                new: true
            })
        console.log(`result is : ${result}`);
        if (!result) {
            res.json({
                message: "Plan not Existeds!",
                result,
            });
        } else {
            res.json({
                message: "Plan Updated Successfully!",
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Plan Updation Failed!",
            status: "none",
            err
        });
    }
};
module.exports = UpdateSubscriptionPlan;
