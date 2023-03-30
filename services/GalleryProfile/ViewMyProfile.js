// const Users = require("../../models/User");
const db = require("../../models");
const GalleryProfile = db.GalleryProfile;

const ViewMyProfile = async (req, res) => {
	try {
		const { id } = req.body;
		const users = await GalleryProfile.findOne({ where: { userID: req.params.id } });
		if (!users) {
			res.json({
				message: "No Profile found!",
				status: false,
			});
		} else {
			res.json({
				message: "Profile Data!",
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
module.exports = ViewMyProfile;