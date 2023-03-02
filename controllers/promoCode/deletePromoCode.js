const PromoCode = require("../../models/promoCode");
const deletePromoCode = async (req, res) => {
	try {
		const code = await PromoCode.findOneAndDelete({_id:req.params.id});
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