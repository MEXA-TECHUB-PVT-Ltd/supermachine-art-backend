const TermOfUse = require("../../models/termOfUse");
const ViewTermOfUse = async (req, res) => {
	try {
		const result = await TermOfUse.find();
		if (!result) {
			res.json("No TermOfUse found");
		} else {
			res.json(result);
		}
	} catch (err) {
		res.json({
			message: "TermOfUse Fetching Failed",
			status: false,
			err
		});
	}
};
module.exports = ViewTermOfUse;