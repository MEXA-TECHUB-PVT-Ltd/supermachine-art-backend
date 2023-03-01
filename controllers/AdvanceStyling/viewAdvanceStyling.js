const AdvanceStyling = require("../../models/AdvanceStyling");
const ViewAdvanceStyling = async (req, res) => {
	try {
		const result = await AdvanceStyling.find();
		if (!result) {
			res.json({
				message: "No  Style Type  found",
				status: false,
			});	
		} else {
			res.json({
				message: "Style Type fetch Successfully",
				status: true,
				result
			});	
		}
	} catch (err) {
		res.json({
			message: "Style Type  Fetching Failed",
			status: false,
		});
	}
};
module.exports = ViewAdvanceStyling;