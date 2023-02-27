const imageSize = require("../../models/ImgSizeRatio");
const deleteimageSizeRatio = async (req, res) => {
	try {
		const result = await imageSize.findOneAndDelete({_id:req.params.id});
		if (!result) {
			res.json("No imageSize found");
		} else {
			res.json({
				message: "imageSize Delected Successfully",
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
module.exports = deleteimageSizeRatio;