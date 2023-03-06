const Plan = require("../../models/subscriptionPlan");
const ViewSubscriptionPlanAlotedData = async (req, res) => {
	try {
		const { _id } = req.body;
		const plan = await Plan.find({_id:_id});
		console.log(plan);
		if (!plan) {
			res.json({
                message: "No plan found",
                status:false,
            });
		} else {
			res.json({
                message: "plan Data!",
                status:true,
				plan
            });
		}
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = ViewSubscriptionPlanAlotedData;