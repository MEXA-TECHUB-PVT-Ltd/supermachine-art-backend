// const Users = require("../../models/User");
const db = require("../../models");
const Images = db.Images;

const ViewUserAllImages = async (req, res) => {
	try {
		const images = await Images.findAll({
			 where: { userID: req.params.id, FolderStatus: 'public' } 
			});
		if (!images) {
			res.json({
				message: "No Image found!",
				status: false,
			});
		} else {
			res.json({
				message: "Images Data!",
				status: true,
				images
			});
		}

	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = ViewUserAllImages;