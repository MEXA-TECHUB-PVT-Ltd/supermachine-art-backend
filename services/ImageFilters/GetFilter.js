const db = require("../../models");
const ImageFilters = db.ImageFilters;

const GetFilter = async (req, res) => {
	try {
		const {  id} = req.body;
		const users = await ImageFilters.findOne({where:{id:id }});
		if (!users) {
			res.json({
				message: "No Image Filters found!",
				status: false,
			});
		} else {
			res.json({
				message: "Filter Data!",
				status: true,
				users
			});
		}

	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = GetFilter;