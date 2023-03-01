const ImgSize = require("../../models/ImgSizeRatio");
const ViewImgSize = async (req, res) => {
	try {
		// const {  } = req.body;
		const result = await ImgSize.find();
		if (!result) {
			res.json({
				message: "No  Img Size found",
				status: false,
			});
		} else {
			res.json({
				message: "Img Size found",
				status: true,
				result
			});
		}
	} catch (err) {
		res.json({
			message: "Img Size Fetching Failed",
			status: false,
		});
	}
};
module.exports = ViewImgSize;