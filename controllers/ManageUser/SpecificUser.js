const Users = require("../../models/User");
const ViewAllUsers = async (req, res) => {
	try {
		const { _id } = req.body;
		const result = await Users.find({ _id: _id });
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