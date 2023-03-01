const Plan = require("../../models/subscriptionPlan");
const PromoCode = require("../../models/promoCode");

const DeleteSpecificSubscriptionPlan = async (req, res) => {
    try {
        const result = await Plan.findOneAndDelete({ _id: req.params.id });
        if (!result) {
            res.json({
                message: "No Plan found",
                status: false,
            });
        } else {
            const code = await PromoCode.deleteMany({ subscriptionPlanID: req.params.id });
            if (!code) {
                res.json({
                    message: "Plan Has no Promo Code! & deleted Successfully",
                    status: true,
                });
            }
            res.json({
                message: "Plan Delected Successfully",
                status: true,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            status: false,
        });
    }
};
module.exports = DeleteSpecificSubscriptionPlan;