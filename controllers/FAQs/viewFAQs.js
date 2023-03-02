const FAQs = require("../../models/FAQs");
const ViewFAQs = async (req, res) => {
	try {
		const result = await FAQs.aggregate([
			{
				$project: {
					question: 1,
					answer: 1,
					likes:1,
					dislikes:1,
					likesCount: { $cond: { if: { $isArray: "$likes" }, then: { $size: "$likes" }, else: "0" } },
					dislikesCount: { $cond: { if: { $isArray: "$dislikes" }, then: { $size: "$dislikes" }, else: "0" } }

				}
			}

		])
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