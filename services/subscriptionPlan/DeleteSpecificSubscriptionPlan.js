// const Plan = require("../../models/subscriptionPlan");
// const PromoCode = require("../../models/promoCode");
const db = require("../../models");
const Plan = db.subscriptionPlan;
// const PromoCode = db.promoCode;

const DeleteSpecificSubscriptionPlan = async (req, res) => {
    try {
        const result = await Plan.destroy({ where: { id: req.params.id } });
        if (!result) {
            res.json({
                message: "No Plan found",
                status: false,
            });
        } else {
            // const code = await PromoCode.destroy({ where: { SubscriptionPlanID: req.params.id } });
            // if (!code) {
            //     res.json({
            //         message: "Plan Has no Promo Code! & deleted Successfully",
            //         status: true,
            //     });
            // } else {
            res.json({
                message: "Plan Delected Successfully",
                status: true,
                result
            });
            // }
        }
    } catch (err) {
        res.json({
            message: "error",
            status: false,
        });
    }
};
module.exports = DeleteSpecificSubscriptionPlan;