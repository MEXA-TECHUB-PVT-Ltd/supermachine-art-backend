module.exports = (sequelize, Sequelize) => {
	const GalleryImages = sequelize.define("GalleryImages", {
        folderID: {
			type: Sequelize.INTEGER,
			required: true,
		},
		image: {
			type: Sequelize.STRING,
			required: true,
		},

	});
	return GalleryImages;
};
