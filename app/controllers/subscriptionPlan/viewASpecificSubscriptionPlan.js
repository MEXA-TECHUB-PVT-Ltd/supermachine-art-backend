const db = require("../../models");
const Plan = db.subscriptionPlan;

const viewASpecificSubscriptionPlan = async (req, res) => {
	try {
		const {id} = req.body
		const result = await Plan.findAll({where:{id:id}});
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