module.exports = (sequelize, Sequelize) => {
	const ImageFilters = sequelize.define("ImageFilters", {
	name: {
		type: Sequelize.STRING,
		required: true,
	},
	status: {
		type: Sequelize.STRING,
		required: true,
	}
});
return ImageFilters;
};