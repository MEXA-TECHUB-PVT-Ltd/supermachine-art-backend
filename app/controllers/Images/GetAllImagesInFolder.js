// const Users = require("../../models/User");
const db = require("../../models");
const Images = db.Images;

const GetAllImagesInFolder = async (req, res) => {
	try {
        console.log(req.params.id);
		const images = await Images.findAll({where:{ FolderID: req.params.id }});
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
module.exports = GetAllImagesInFolder;