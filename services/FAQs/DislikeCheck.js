const db = require("../../models");
const dislikes = db.dislikes;

const DislikeCheck = async (req, res) => {
	try {
		const result = await dislikes.findAll();
		if (!result) {
			res.json({
				message: "Not Disliked",
				status: false,
			});
		} else {
			res.json({
				message: "Disliked",
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
module.exports = DislikeCheck;