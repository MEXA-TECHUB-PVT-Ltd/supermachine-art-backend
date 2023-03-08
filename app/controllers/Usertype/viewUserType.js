// const UserType = require("../../models/UserType");
const db = require("../../models");
const UserType = db.UserType;
const ViewUserType = async (req, res) => {
	try {
		// const {  } = req.body;
		const result = await UserType.findAll();
		if (!result) {
			res.json({
				message: "No  User Type  found",
				status: true,
				result
			});
		} else {
			res.json({
				message: "User Type  Data",
				status: true,
				result
			});
		}
	} catch (err) {
		res.json({
			message: "User Type  Fetching Failed",
			status: false,
		});
	}
};
module.exports = ViewUserType;