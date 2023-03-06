// const Users = require("../../models/User");
const db = require("../../models");
const Users = db.user;

const ViewAllUsers = async (req, res) => {
	try {
		// const {  } = req.body;
		const users = await Users.findAll({where:{ status: "unBlock" }});
		if (!users) {
			res.json({
				message: "No Users found!",
				status: false,
			});
		} else {
			res.json({
				message: "Users found!",
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
module.exports = ViewAllUsers;