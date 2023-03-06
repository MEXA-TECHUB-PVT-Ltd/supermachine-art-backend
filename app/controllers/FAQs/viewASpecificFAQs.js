const FAQs = require("../../models/FAQs.model");
const ObjectId = require("mongodb").ObjectId;
const viewASpecificFAQs = async (req, res) => {
	try {
		const { _id } = req.body
		console.log(_id);
		const id = new ObjectId(_id)
		const result = await FAQs.aggregate([
			{
				$match: {
					_id: id
				}
			},
			{
				$project: {
					question: 1,
					answer: 1,
					likes: { $cond: { if: { $isArray: "$likes" }, then: { $size: "$likes" }, else: "0" } },
					dislikes: { $cond: { if: { $isArray: "$dislikes" }, then: { $size: "$dislikes" }, else: "0" } }

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
module.exports = viewASpecificFAQs;