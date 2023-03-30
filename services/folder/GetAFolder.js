// const Users = require("../../models/User");
const db = require("../../models");
const Folder = db.Folder;

const GetAllFolderUser = async (req, res) => {
	try {
		const { userID , id} = req.body;
		const users = await Folder.findOne({where:{id:id, userID: userID }});
		if (!users) {
			res.json({
				message: "No Folder found!",
				status: false,
			});
		} else {
			res.json({
				message: "Folder Data!",
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
module.exports = GetAllFolderUser;