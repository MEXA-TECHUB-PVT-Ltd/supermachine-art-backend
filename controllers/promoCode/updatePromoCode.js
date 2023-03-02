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
                status: true,
                result,
            });
        } else {
            res.json({
                message: "Promo Code Updated Successfully!",
                status:true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Promo Code Updation Failed!",
            status: false,
        });
    }
};
module.exports = UpdatePromoCode;
