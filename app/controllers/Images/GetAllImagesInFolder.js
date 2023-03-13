// const Users = require("../../models/User");
const db = require("../../models");
const Images = db.Images;

const GetAllImagesInFolder = async (req, res) => {
	try {
		console.log(req.params.id);
		const images = await Images.findAll({ where: { FolderID: req.params.id } });
		// console.log(images)
		// const { image } = images;
		// console.log(image);
		// var contentType = 'image/png';
		// var b64Data = image;
		// var blob = b64toBlob(b64Data, contentType);
		// var blobUrl = URL.createObjectURL(blob);
		// console.log(blobUrl);
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