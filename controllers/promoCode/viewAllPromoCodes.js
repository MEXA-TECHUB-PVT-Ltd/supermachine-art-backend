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
			res.json("No Promo Code found");
		} else {
			console.log(result);
			res.json(result);
		}
	} catch (err) {
		res.json({
			message: "Promo Code Fetching Failed",
			status: false,
			err
		});
	}
};
module.exports = ViewAllPromoCode;