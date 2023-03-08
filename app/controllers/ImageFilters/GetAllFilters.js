const db = require("../../models");
const ImageFilters = db.ImageFilters;

const GetAllFilter = async (req, res) => {
	try {
		// const {  id} = req.body;
		const users = await ImageFilters.findAll();
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
module.exports = GetAllFilter;