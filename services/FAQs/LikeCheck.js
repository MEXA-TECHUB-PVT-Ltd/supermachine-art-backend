const db = require("../../models");
const like = db.likes;

const LikeChecks = async (req, res) => {
	try {
		const result = await like.findAll();
		if (!result) {
			res.json({
				message: "Not liked",
				status: false,
			});
		} else {
			res.json({
				message: "liked",
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
module.exports = LikeChecks;