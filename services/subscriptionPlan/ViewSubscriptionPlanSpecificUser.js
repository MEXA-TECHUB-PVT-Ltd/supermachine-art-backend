const db = require("../../models");
const ViewSubscriptionPlanSpecificUser = async (req, res) => {
	try {
		let query = `SELECT "PromoCodes".id, "PromoCodes".code, 
		"PromoCodes".discount, "PromoCodes".expiry, "SubscriptionPlans".name,
		 "SubscriptionPlans".feature FROM "usersSubscriptions"   JOIN "SubscriptionPlans" 
		ON "usersSubscriptions"."subscriptionID" = "SubscriptionPlans"."id"`;
		const [results] = await db.sequelize.query(query);
		if (!results) {
			res.json({
				message: "No Subscription found",
				status: false,
			});
		} else {
			res.json({
				message: "Subscription Data!",
				status: true,
				results
			});
		}
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
		console.log(err);
	}
};
module.exports = ViewSubscriptionPlanSpecificUser;