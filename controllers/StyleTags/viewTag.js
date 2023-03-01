const Tag = require("../../models/StyleTags");
const viewTag = async (req, res) => {
	try {
		const  {AdvanceStylingID}  = req.body;
		console.log(AdvanceStylingID);
		const result = await Tag.find({AdvanceStylingID:AdvanceStylingID});
		if (!result) {
			res.json({
                message: "No  Img Size found",
                status:false,
            });
		} else {
			res.json({
                message: "Img Size found Successfully!",
                status:true,
				result
            });
		}
	} catch (err) {
		res.json({
			message: "Error!",
			status: false,
		});
	}
};
module.exports = viewTag;