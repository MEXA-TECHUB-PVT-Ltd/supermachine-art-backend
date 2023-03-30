// const Users = require("../../models/User");
const db = require("../../models");
const Users = db.user;
const AllMemberUsers = async (req, res) => {
	try {
		// const {  } = req.body;
		const result = await Users.findAll(
			{ where: { type: "member" } });
		if (!result) {
			res.json({
				message: "No Users found!",
				status: false,
			});
		} else {
			res.json({
				message: "Member Users Data!",
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
module.exports = AllMemberUsers;