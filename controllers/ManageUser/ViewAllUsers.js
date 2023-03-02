const Users = require("../../models/User");
const ViewAllUsers = async (req, res) => {
	try {
		// const {  } = req.body;
		const users = await Users.find({ status: "unBlock" });
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