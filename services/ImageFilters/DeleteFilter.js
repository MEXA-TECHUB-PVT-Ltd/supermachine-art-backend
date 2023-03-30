// const User = require("../../models/User");
const db = require("../../models");
const imageFilter = db.ImageFilters;

const DeleteFilter = async (req, res) => {
	try {
		const result = await imageFilter.destroy({where:{id:req.params.id}});
		if (!result) {
			res.json({
				message: "No image Filter found",
				status: false,
			});    
		} else {
			res.json({
				message: "image Filter Delected Successfully",
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
module.exports = DeleteFilter;