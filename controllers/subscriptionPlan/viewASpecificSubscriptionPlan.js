const Plan = require("../../models/subscriptionPlan");
const viewASpecificSubscriptionPlan = async (req, res) => {
	try {
		const {_id} = req.body
		const result = await Plan.find({_id:_id});
		if (!result) {
			res.json({
                message: "No plan found",
                status:false,
            });
		} else {
			res.json({
                message: "Specific plan Data!",
                status:true,
				result
            });
		}
	} catch (err) {
		res.json({
			message: "Error!",
			status: false,
		});
	}
};
module.exports = viewASpecificSubscriptionPlan;