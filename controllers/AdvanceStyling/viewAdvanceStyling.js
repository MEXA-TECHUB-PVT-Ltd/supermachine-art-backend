const AdvanceStyling = require("../../models/AdvanceStyling");
const ViewAdvanceStyling = async (req, res) => {
	try {
		// const {  } = req.body;
		const result = await AdvanceStyling.find();
		if (!result) {
			res.json("No  Style Type  found");
		} else {
			console.log(result);
			res.json(result);
		}
	} catch (err) {
		res.json({
			message: "Style Type  Fetching Failed",
			status: false,
			err
		});
	}
};
module.exports = ViewAdvanceStyling;