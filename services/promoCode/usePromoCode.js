// const PromoCode = require("../../models/UsePromoCode");
// const User = require("../../models/User");
// const Plan = require("../../models/subscriptionPlan");
const db = require("../../models");
const PromoCode = db.usePromoCode;
const Op = db.Sequelize.Op;

const UsePromoCode = async (req, res) => {
    try {
        const { userID, SubscriptionPlanID, promoCodeID } = req.body;
        const promocodeData = {
            userID:userID,
            SubscriptionPlanID: SubscriptionPlanID,
            promoCodeID: promoCodeID,
        }
        // const result = await new PromoCode({ SubscriptionPlanID, promoCodeID, createdAt });
        PromoCode.create(promocodeData).then(result => {
            res.json({
                message: "get PromoCode Sccessfully",
                status: true,
                result,

            })
        });
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = UsePromoCode;