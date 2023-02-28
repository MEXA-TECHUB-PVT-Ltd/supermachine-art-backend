const StyleTags = require("../../models/StyleTags");
const DeleteStyleTags = async (req, res) => {
	try {
		const result = await StyleTags.findOneAndDelete({_id:req.params.id});
		if (!result) {
			res.json("No Style Tag Type found");
		} else {
			res.json({
				message: "Style Tag Delected Successfully",
				status: true,
				result
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
module.exports = DeleteStyleTags;