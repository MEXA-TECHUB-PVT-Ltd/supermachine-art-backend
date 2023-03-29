// const Users = require("../../models/User");
const db = require("../../models");
const Users = db.user;
const ViewAllUsers = async (req, res) => {
	try {
		// const {  } = req.body;
		const result = await Users.findAll(
			{ where: { status:"block" } });
		console.log(result);
		if (!result) {
			res.json({
                message: "No users found!",
                status:false,
            });
		} else {
			res.json({
                message: "Users found!",
                status:true,
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