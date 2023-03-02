const StyleTags = require("../../models/StyleTags");
const DeleteStyleTags = async (req, res) => {
	try {
		const result = await StyleTags.findOneAndDelete({_id:req.params.id});
		if (!result) {
			res.json({
                message: "No Style Tag Type found",
                status: false,
            });
		} else {
			res.json({
				message: "Style Tag Delected Successfully",
				status: true,
				result
			});
			}
	} catch (err) {
		res.json({
			message: "Error!",
			status: false,
		});
	}
};
module.exports = DeleteStyleTags;