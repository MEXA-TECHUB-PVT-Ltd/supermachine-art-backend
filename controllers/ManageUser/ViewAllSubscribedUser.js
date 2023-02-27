const Users = require("../../models/User");
const ViewAllSubscribedUser = async (req, res) => {
	try {
		// const {  } = req.body;
		const users = await Users.find({type:"subscriber"});
		console.log(users);
		if (!users) {
			res.json("No users found");
		} else {
			res.json( users );
		}
	} catch (err) {
		res.json({
			message: "error",
			status: "none",
			err
		});
	}
};
module.exports = ViewAllSubscribedUser;