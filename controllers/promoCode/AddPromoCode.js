const PromoCode = require("../../models/promoCode");

const AddPromoCode = async (req, res) => {
    try {
        const { _id, code, discount, expiry } = req.body;
        if (!code) {
            res.json({
                message: "code is required",
                status: false,
            });
        } else
            if (!discount) {
                res.json({
                    message: "Discount is required",
                    status: false,
                });
            } else
                if (!expiry) {
                    res.json({
                        message: "Expiry Date is required",
                        status: false,
                    });    
                } else {
                    const subscriptionPlanID = _id;
                    const createdAt = new Date();
                    const result = new PromoCode({ subscriptionPlanID, code, discount, expiry, createdAt });
                    result.save();
                    await res.json({
                        message: "Promo Code Added Successfully!",
                        status:true,
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
module.exports = AddPromoCode;