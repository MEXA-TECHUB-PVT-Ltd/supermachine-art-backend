module.exports = (sequelize, Sequelize) => {
	const GalleryProfile = sequelize.define("GalleryProfile", {
		userID: {
			type: Sequelize.INTEGER,
			required: true,
		},
		name: {
			type: Sequelize.STRING,
			required: true,
		},
		image: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.STRING,
			required: true,
		},

	});

	return GalleryProfile;
};
