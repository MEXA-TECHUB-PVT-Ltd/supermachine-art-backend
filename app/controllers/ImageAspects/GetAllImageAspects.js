const db = require("../../models");
const ImageAspects = db.ImageAspects;

const GetAllImageAspects = async (req, res) => {
	try {
		// const {  id} = req.body;
		const users = await ImageAspects.findAll();
		if (!users) {
			res.json({
				message: "No mageAspects found!",
				status: false,
			});
		} else {
			res.json({
				message: "Image Aspects Data!",
				status: true,
				users
			});
		}

	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = GetAllImageAspects;