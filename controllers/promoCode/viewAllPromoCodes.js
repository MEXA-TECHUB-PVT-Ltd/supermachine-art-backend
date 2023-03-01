const promoCode = require("../../models/promoCode");
const ViewAllPromoCode = async (req, res) => {
	try {
		// const {  } = req.body;
		const result = await promoCode.aggregate([
			{
				$lookup: {
					from: "subscriptionplans",
					localField: 'subscriptionPlanID',
					foreignField: '_id',
					as: "SubscriptionData"
				}

			}
		]);
		// const result = await promoCode.find();
		if (!result) {
			res.json({
				message: "No Promo Code found",
				status:false,
			});
		} else {
			res.json({
				message: "Promo Code data!",
				status:true,
				result,
			});
		}
	} catch (err) {
		res.json({
			message: "Error",
			status: false,
		});
	}
};
module.exports = ViewAllPromoCode;