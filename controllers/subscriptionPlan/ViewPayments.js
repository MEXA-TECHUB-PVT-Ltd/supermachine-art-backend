const Payments = require("../../models/payments");
const ViewSubscriptionPlan = async (req, res) => {
	try {
		// const {  } = req.body;
		const payments = await Payments.find();
		console.log(payments);
		if (!payments) {
			res.json("No payments found");
		} else {
			res.json({ payments });
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