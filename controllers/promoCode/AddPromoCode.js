const PromoCode = require("../../models/promoCode");

const AddPromoCode = async (req, res) => {
    try {
        const { _id, code, discount, expiry } = req.body;
        if (!code) {
            res.status(400).send("code is required");
        }
        if (!discount) {
            res.status(400).send("Discount is required");
        }
        if (!expiry) {
            res.status(400).send("Expiry Date is required");
        }
        const subscriptionPlanID = _id;
        const createdAt = new Date();
        const result =  new PromoCode({ subscriptionPlanID, code, discount, expiry, createdAt });
        result.save();
        await res.json({
            message: "Promo Code Added Successfully!",
            result,
        });
    } catch (err) {
        res.json({
            message: "Promo Code Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddPromoCode;