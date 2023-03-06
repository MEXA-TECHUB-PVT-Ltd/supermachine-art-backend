// const Users = require("../../models/User");
const db = require("../../models");
const Users = db.user;

const ViewAllUsers = async (req, res) => {
	try {
		const { id } = req.body;
		const result = await Users.findOne({where:{id:id}});
		if (!result) {
			res.json({
				message: "No Users found!",
				status: false,
			});
		} else {
			res.json({
				message: "Users found!",
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
module.exports = ViewAllUsers;