// const User = require("../../models/User");
const db = require("../../models");
const ImageAspects = db.ImageAspects;

const DeleteImageAspects = async (req, res) => {
	try {
		const result = await ImageAspects.destroy({where:{id:req.params.id}});
		if (!result) {
			res.json({
				message: "No ImageAspects found",
				status: false,
			});    
		} else {
			res.json({
				message: "Image Aspects Delected Successfully",
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
module.exports = DeleteImageAspects;