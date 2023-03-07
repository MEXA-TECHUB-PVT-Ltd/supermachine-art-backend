// const PromoCode = require("../../models/promoCode");
const db = require("../../models");
const PromoCode = db.promoCode;
const Op = db.Sequelize.Op;

const AddPromoCode = async (req, res) => {
    try {
        const { id, code, discount, expiry } = req.body;
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
                    // const SubscriptionPlanID = id;
                    // const createdAt = new Date();
                    const promocodedata = {
                        code: code,
                        discount: discount,
                        expiry: expiry,
                        SubscriptionPlanID: id,
                    }
                    console.log(promocodedata);
                    // const result = new PromoCode({ subscriptionPlanID, code, discount, expiry, createdAt });
                    PromoCode.create(promocodedata).then(result => {
                         res.json({
                            message: "Promo Code Added Successfully!",
                            status: true,
                            result,
                        });
                    })
                }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = AddPromoCode;