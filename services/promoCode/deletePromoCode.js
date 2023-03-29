// const PromoCode = require("../../models/promoCode");
const db = require("../../models");
const PromoCode = db.promoCode;
const Op = db.Sequelize.Op;

const deletePromoCode = async (req, res) => {
	try {
		const code = await PromoCode.destroy({where:{id:req.params.id}});
		if (!code) {
			res.json({
				message: "No Promo Code found",
				status: false,
			});    
		} else {
			res.json({
				message: "Promo Code Delected Successfully",
				status: true,
				code
			});
			}
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = deletePromoCode;