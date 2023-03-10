// const Users = require("../../models/User");
const db = require("../../models");
const GalleryProfile = db.GalleryProfile;

const getAllPublicProfiles = async (req, res) => {
	try {
		const gallery = await GalleryProfile.findAll();
		if (!gallery) {
			res.json({
				message: "No Gallery found!",
				status: false,
			});
		} else {
			res.json({
				message: "Gallery Data!",
				status: true,
				gallery
			});
		}

	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = getAllPublicProfiles;