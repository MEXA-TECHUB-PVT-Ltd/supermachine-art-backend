// const AdvanceStyling = require("../../models/AdvanceStyling");
const db = require("../../models");
const AdvanceStyling = db.AdvanceStyling;
const Op = db.Sequelize.Op;

const ViewAdvanceStyling = async (req, res) => {
	try {
		const result = await AdvanceStyling.findAll();
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