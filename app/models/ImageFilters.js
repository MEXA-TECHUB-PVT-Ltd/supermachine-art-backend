module.exports = (sequelize, Sequelize) => {
	const ImageFilters = sequelize.define("ImageFilters", {
	filterStatus: {
		type: Sequelize.STRING,
		required: true,
	},
});
return ImageFilters;
};