// const promoCode = require("../../models/promoCode");
const db = require("../../models");
const promoCode = db.promoCode;
const Op = db.Sequelize.Op;

const UpdatePromoCode = async (req, res) => {
    try {
        const { id, code,discount,expiry } = req.body;
        const result = await promoCode.update(
            {
                code: code,
                discount: discount,
                expiry: expiry,
            },
            {where:{ id: id }}
        )
        if (!result) {
            res.json({
                message: "Promo Code not updated!",
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
