module.exports = (sequelize, Sequelize) => {
	const ImageSizeRatio = sequelize.define("ImageSizeRatio", {
	imageSize: {
		type: Sequelize.STRING,
		required: true,
	},
});

return ImageSizeRatio
};