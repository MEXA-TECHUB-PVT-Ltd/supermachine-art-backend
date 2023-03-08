// const Plan = require("../../models/subscriptionPlan");
// const AvailPlan = require("../../models/usersSubscriptions");
const db = require("../../models");
// const Plan = db.usersSubscriptions;
// const User = db.user;

const ViewSubscriptionPlanUser = async (req, res) => {
	try {

		let query = `SELECT "UsersSubscriptions".id, "UsersSubscriptions".name AS "Uname", "UsersSubscriptions".email,
		 "UsersSubscriptions".date ,"SubscriptionPlans".name,
		  "SubscriptionPlans".validaty FROM "UsersSubscriptions" 
		    JOIN "SubscriptionPlans" ON "UsersSubscriptions"."subscriptionID" = "SubscriptionPlans"."id"`;
		// let query = `SELECT "UsersSubscriptions".id, "UsersSubscriptions".name, "UsersSubscriptions".email,
		// "UsersSubscriptions".date, "SubscriptionPlans".duration FROM "UsersSubscriptions" JOIN "SubscriptionPlans" ON "UsersSubscriptions"."subscriptionPlanID" = "SubscriptionPlans"."id"`;
		const [results] = await db.sequelize.query(query);

		// const result = await AvailPlan.aggregate([
		// 	{
		// 		$lookup: {
		// 			from: "subscriptionplans",
		// 			localField: 'subscriptionID',
		// 			foreignField: '_id',
		// 			as: "SubscriptionData"
		// 		}

		// 	}
		// ]);
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