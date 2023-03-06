const Plan = require("../../models/subscriptionPlan");
const AvailPlan = require("../../models/usersSubscriptions");

const ViewSubscriptionPlanUser = async (req, res) => {
	try {
		const result = await AvailPlan.aggregate([
			{
				$lookup: {
					from: "subscriptionplans",
					localField: 'subscriptionID',
					foreignField: '_id',
					as: "SubscriptionData"
				}

			}
		]);
		if (!result) {
			res.json({
                message: "No Subscription found",
                status:false,
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
                status:true,
				result
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
	}
};
module.exports = ViewSubscriptionPlanUser;