// const Plan = require("../../models/subscriptionPlan");
const db = require("../../models");
const Plan = db.subscriptionPlan;

const UpdateSubscriptionPlan = async (req, res) => {
    try {
        const { id, price, imageDownloadSize, imageSearches } = req.body;
        const result = await Plan.update(
            {
                price: price,
                imageDownloadSize: imageDownloadSize,
                imageSearches: imageSearches,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "Plan not Existeds!",
                status: false,
                result,
            });
        } else {
            res.json({
                message: "Plan Updated Successfully!",
                status: true,
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
module.exports = UpdateSubscriptionPlan;
