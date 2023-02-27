const Plan = require("../../models/subscriptionPlan");
const ViewSubscriptionPlan = async (req, res) => {
	try {
		// const {  } = req.body;
		const plan = await Plan.find();
		console.log(plan);
		if (!plan) {
			res.json("No plan found");
		} else {
			res.json(plan);
		}
	} catch (err) {
		res.json({
			message: "error",
			status: "none",
			err
		});
	}
};
module.exports = ViewSubscriptionPlan;