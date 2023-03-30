// const Users = require("../../models/User");
const db = require("../../models");
const Folder = db.Folder;

const GetAllPublicFolder = async (req, res) => {
	try {
		// const {  } = req.body;
        console.log(req.params.id);
		const users = await Folder.findAll({where:{ status: 'public' }});
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
module.exports = GetAllPublicFolder;