// const promoCode = require("../../models/promoCode");
const db = require("../../models");
const promoCode = db.promoCode;
// const Op = db.Sequelize.Op;

const ViewAllPromoCode = async (req, res) => {
	try {
		// const {  } = req.body;
		let query = `SELECT "PromoCodes".id, "PromoCodes".code, "PromoCodes".discount, "PromoCodes".expiry, "SubscriptionPlans".name, "SubscriptionPlans".feature FROM "PromoCodes"   JOIN "SubscriptionPlans" 
		ON "PromoCodes"."SubscriptionPlanID" = "SubscriptionPlans"."id"`;
		const [results] = await db.sequelize.query(query);
		// const result = await promoCode.aggregate([
		// 	{
		// 		$lookup: {
		// 			from: "subscriptionplans",
		// 			localField: 'subscriptionPlanID',
		// 			foreignField: '_id',
		// 			as: "SubscriptionData"
		// 		}

		// 	}
		// ]);
		if (!results) {
			res.json({
				message: "No Promo Code found",
				status: false,
				results
				// result : JSON.stringify(results, null, 2)

			});
		} else {
			res.json({
				message: "Promo Code data!",
				status: true,
				results
				// result : JSON.stringify(results, null, 2)
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