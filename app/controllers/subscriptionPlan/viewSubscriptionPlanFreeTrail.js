const db = require("../../models");
const Plan = db.subscriptionPlan;

const viewSubscriptionPlanFreeTrail = async (req, res) => {
	try {
		// const {} = req.body
		const result = await Plan.findAll({where:{freeTrail:'yes'}});
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
module.exports = viewSubscriptionPlanFreeTrail;