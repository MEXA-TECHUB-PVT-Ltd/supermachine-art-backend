// const promoCode = require("../../models/promoCode");
const db = require("../../models");
const promoCode = db.promoCode;
const Op = db.Sequelize.Op;

const UpdatePromoCode = async (req, res) => {
    try {
        const { id, code, discount, expiry } = req.body;
        const results = await promoCode.update(
            {
                code: code,
                discount: discount,
                expiry: expiry,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "Promo Code not Exists!",
                status: true,
            });
        } else {
            if (results.includes(0)) {
                res.json({
                    message: "Promo Code not Exists!",
                    status: false,
                });
            } else {
                const result = {
                    code: code,
                    discount: discount,
                    expiry: expiry,
                }
                res.json({
                    message: "Promo Code Updated Successfully!",
                    status: true,
                    result,
                });
            }
        }
    } catch (err) {
        res.json({
            message: "Promo Code Updation Failed!",
            status: false,
        });
    }
};
module.exports = UpdatePromoCode;
