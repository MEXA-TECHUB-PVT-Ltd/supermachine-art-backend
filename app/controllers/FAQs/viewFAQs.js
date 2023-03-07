const db = require("../../models");
const FAQs = db.FAQS;
const ViewFAQs = async (req, res) => {
	try {
		const result = await FAQs.findAll();
		if (!result) {
			res.json({
				message: "No FAQs found",
				status: false,
			});
		} else {
			res.json({
				message: "FAQs data",
				status: true,
				result
			});
		}
	} catch (err) {
		res.json({
			message: "Try Again",
			status: false,
		});
	}
};
module.exports = ViewFAQs;