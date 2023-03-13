// const User = require("../../models/User");
const db = require("../../models");
const Folder = db.Folder;

const DeleteFolder = async (req, res) => {
	try {
		const result = await Folder.destroy({where:{id:req.params.id}});
		if (!result) {
			res.json({
				message: "No Folder found",
				status: false,
			});    
		} else {
			res.json({
				message: "Folder Delected Successfully",
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
module.exports = DeleteFolder;