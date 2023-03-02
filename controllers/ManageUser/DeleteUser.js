const User = require("../../models/User");
const DeleteUser = async (req, res) => {
	try {
		const result = await User.findOneAndDelete({_id:req.params.id});
		if (!result) {
			res.json({
				message: "No User found",
				status: false,
			});    
		} else {
			res.json({
				message: "User Delected Successfully",
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
module.exports = DeleteUser;