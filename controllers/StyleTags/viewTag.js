const Tag = require("../../models/StyleTags");
const viewTag = async (req, res) => {
	try {
		const  {AdvanceStylingID}  = req.body;
		console.log(AdvanceStylingID);
		const result = await Tag.find({AdvanceStylingID:AdvanceStylingID});
		if (!result) {
			res.json("No  Img Size found");
		} else {
			// console.log(result);
			res.json(result);
		}
	} catch (err) {
		res.json({
			message: "Img Size Fetching Failed",
			status: false,
			err
		});
	}
};
module.exports = viewTag;