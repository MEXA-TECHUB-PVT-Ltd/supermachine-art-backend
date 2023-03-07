// const Plan = require("../../models/subscriptionPlan");

const db = require("../../models");
const Plan = db.subscriptionPlanImageSize;

const ViewSubscriptionPlanAlotedData = async (req, res) => {
	try {
		const { id } = req.body;
		const plan = await Plan.findAll(
			{ where: { SubscriptionPlanID: id } });
		console.log(plan);
		if (!plan) {
			res.json({
				message: "No plan found",
				status: false,
			});
		} else {
			res.json({
				message: "plan Data!",
				status: true,
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