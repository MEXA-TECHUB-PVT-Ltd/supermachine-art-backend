const Payments = require("../../models/payments");
const ViewSubscriptionPlan = async (req, res) => {
	try {
		// const {  } = req.body;
		const payments = await Payments.find();
		console.log(payments);
		if (!payments) {
			res.json({
                message: "No payment found!",
                status:false,
            });
		} else {
			res.json({
                message: "Payment Data Fetch Successfully!",
                status:true,
                payments,
            });
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