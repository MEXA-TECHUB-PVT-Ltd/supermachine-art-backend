const db = require("../../models");
const FAQs = db.FAQS;
const likes = db.likes;
const dislikes = db.dislikes;

const viewASpecificFAQs = async (req, res) => {
	try {
		const { id } = req.body
		const result = await FAQs.findAll({
			where: { id: id },
		});
		const like = await likes.findAll({
			where: { faqsId: id },
		});
		const dislike = await dislikes.findAll({
			where: { faqsId: id },
		});
		if (!result) {
			res.json({
				message: "No FAQs found",
				status: false,
			});
		} else {
			res.json({
				message: "FAQs data",
				status: true,
				result,
				like,
				dislike

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