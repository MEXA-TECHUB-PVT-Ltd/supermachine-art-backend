const UserType = require("../../models/UserType");
const ViewUserType = async (req, res) => {
	try {
		// const {  } = req.body;
		const result = await UserType.find();
		if (!result) {
			res.json("No  User Type  found");
		} else {
			console.log(result);
			res.json(result);
		}
	} catch (err) {
		res.json({
			message: "User Type  Fetching Failed",
			status: false,
			err
		});
	}
};
module.exports = ViewUserType;