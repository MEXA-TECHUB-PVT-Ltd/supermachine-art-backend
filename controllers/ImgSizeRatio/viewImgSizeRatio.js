const ImgSize = require("../../models/ImgSizeRatio");
const ViewImgSize = async (req, res) => {
	try {
		// const {  } = req.body;
		const result = await ImgSize.find();
		if (!result) {
			res.json("No  Img Size found");
		} else {
			console.log(result);
			res.json(result);
		}
	} catch (err) {
		res.json({
			message: "Img Size Fetching Failed",
			status: false,
			err
		});
	}
};
module.exports = ViewImgSize;