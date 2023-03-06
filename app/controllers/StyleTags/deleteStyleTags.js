const db = require("../../models");
const StyleTags = db.StyleTags;
const Op = db.Sequelize.Op;
const DeleteStyleTags = async (req, res) => {
	try {
		const result = await StyleTags.destroy({where:{id:req.params.id}});
		if (!result) {
			res.json({
                message: "No Style Tag Type found",
                status: false,
            });
		} else {
			res.json({
				message: "Style Tag Delected Successfully",
				status: true,
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
module.exports = DeleteStyleTags;