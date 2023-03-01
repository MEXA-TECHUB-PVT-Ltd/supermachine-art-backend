const UserType = require("../../models/UserType");
const DeleteUserType = async (req, res) => {
	try {
		const result = await UserType.findOneAndDelete({_id:req.params.id});
		if (!result) {
			res.json("No User Type found");
		} else {
			res.json({
				message: "User Type Delected Successfully",
				status: true,
				result
			});
			}
	} catch (err) {
		res.json({
			message: "error",
			status: "none",
			err
		});
	}
};
module.exports = DeleteUserType;