const AdvanceStyling = require("../../models/AdvanceStyling");
const DeleteAdvanceStyling = async (req, res) => {
	try {
		const result = await AdvanceStyling.findOneAndDelete({_id:req.params.id});
		if (!result) {
			res.json("No Advance Styling Type found");
		} else {
			res.json({
				message: "Advance Style Delected Successfully",
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
module.exports = DeleteAdvanceStyling;