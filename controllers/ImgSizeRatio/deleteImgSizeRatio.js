const imageSize = require("../../models/ImgSizeRatio");
const deleteimageSizeRatio = async (req, res) => {
	try {
		const result = await imageSize.findOneAndDelete({_id:req.params.id});
		if (!result) {
			await res.json({
                message: "No image Size found",
                status: false,
            });    
		} else {
			res.json({
				message: "image Size Delected Successfully",
				status: true,
				result
			});
			}
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = deleteimageSizeRatio;