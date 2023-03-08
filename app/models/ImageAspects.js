module.exports = (sequelize, Sequelize) => {
	const ImageAspects = sequelize.define("ImageAspects", {
	name: {
		type: Sequelize.STRING,
		required: true,
	},
	resolution: {
		type: Sequelize.STRING,
		required: true,
		//like width * height
	},
});
return ImageAspects;
};