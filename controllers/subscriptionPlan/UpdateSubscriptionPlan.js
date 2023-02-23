const Plan = require("../../models/subscriptionPlan");

const UpdateSubscriptionPlan = async (req, res) => {
    try {
        const { _id, name, type, price, feature } = req.body;
        const result = await Plan.findOneAndUpdate({ _id: _id },
            {
                name: name,
                type: type,
                price: price,
                feature: feature
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
                message: "Plan updated Successfully",
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
