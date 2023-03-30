const db = require("../../models");
const ImageAspects = db.ImageAspects;

const GetImageAspects = async (req, res) => {
	try {
		const {  id} = req.body;
		const users = await ImageAspects.findOne({where:{id:id }});
		if (!users) {
			res.json({
				message: "No Image Aspects found!",
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
module.exports = GetImageAspects;