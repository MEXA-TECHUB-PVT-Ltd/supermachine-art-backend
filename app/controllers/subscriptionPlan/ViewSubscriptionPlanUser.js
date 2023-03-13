// const Plan = require("../../models/subscriptionPlan");
// const AvailPlan = require("../../models/usersSubscriptions");
const db = require("../../models");
// const Plan = db.usersSubscriptions;
// const User = db.user;

const ViewSubscriptionPlanUser = async (req, res) => {
	try {

		let query = `SELECT "UsersSubscriptions".id, "UsersSubscriptions".name AS "Uname"
		,"UsersSubscriptions".email, "UsersSubscriptions"."createdAt", "SubscriptionPlans".name,
		  "SubscriptionPlans".validity FROM "UsersSubscriptions" 
		  JOIN "SubscriptionPlans" ON "UsersSubscriptions"."subscriptionID" = "SubscriptionPlans"."id"`;
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
	}
};
module.exports = ViewSubscriptionPlanUser;