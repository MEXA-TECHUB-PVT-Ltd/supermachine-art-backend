// const Plan = require("../../models/subscriptionPlan");
// const AvailPlan = require("../../models/usersSubscriptions");
const db = require("../../models");
const AvailPlan = db.usersSubscriptions;
const ViewSubscriptionPlanSpecificUser = async (req, res) => {
	try {
		const { id } = req.body;
		let query = `SELECT "PromoCodes".id, "PromoCodes".code, "PromoCodes".discount, "PromoCodes".expiry, "SubscriptionPlans".name, "SubscriptionPlans".feature FROM "usersSubscriptions"   JOIN "SubscriptionPlans" 
		ON "usersSubscriptions"."subscriptionID" = "SubscriptionPlans"."id"`;
		const [results] = await db.sequelize.query(query);
		if (!results) {
			res.json({
				message: "No Subscription found",
				status: false,
			});
		} else {
			// const plan = await Plan.find({});
			// // console.log(plan);
			// for (let i = 0; i < availPlan.length; i++) {
			// 	for (let j = 0; j < plan.length; j++) {
			// 		console.log(availPlan[i].subscriptionID+ "  :  "+plan[j]._id);
			// 		if (availPlan[i].subscriptionID.equals(plan[j]._id)) {
			// 			console.log("IF"+j);
			// 			// res.json(plan);
			// 		}
			// 	}
			// }
			res.json({
				message: "Subscription Data!",
				status: true,
				results
			});
		}
		// if (!plan) {
		// 	res.json("No plan found");
		// } else {
		// 	res.json(plan);
		// }
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
		console.log(err);
	}
};
module.exports = ViewSubscriptionPlanSpecificUser;