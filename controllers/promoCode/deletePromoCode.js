const PromoCode = require("../../models/promoCode");
const deletePromoCode = async (req, res) => {
	try {
		const code = await PromoCode.findOneAndDelete({_id:req.params.id});
		if (!code) {
			res.json("No Promo Code found");
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
			status: "none",
			err
		});
	}
};
module.exports = deletePromoCode;