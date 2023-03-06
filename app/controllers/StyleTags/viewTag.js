// const StyleTags = require("../../models/StyleTags");
const db = require("../../models");
const StyleTags = db.StyleTags;

const viewTag = async (req, res) => {
	try {
		const  {AdvanceStylingID}  = req.body;
		const result = await StyleTags.findAll({ where : {AdvanceStylingID:AdvanceStylingID}});
		if (!result) {
			res.json({
                message: "No  Tag found",
                status:false,
            });
		} else {
			res.json({
                message: "Tag found Successfully!",
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