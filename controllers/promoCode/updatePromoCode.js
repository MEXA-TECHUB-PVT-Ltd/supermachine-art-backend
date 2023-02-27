const promoCode = require("../../models/promoCode");

const UpdatePromoCode = async (req, res) => {
    try {
        const { _id, code,discount,expiry } = req.body;
        const result = await promoCode.findOneAndUpdate({ _id: _id },
            {
                code: code,
                discount: discount,
                expiry: expiry,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Promo Code not Existeds!",
                result,
            });
        } else {
            res.json({
                message: "Promo Code Updated Successfully!",
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Promo Code Updation Failed!",
            status: "none",
            err
        });
    }
};
module.exports = UpdatePromoCode;
