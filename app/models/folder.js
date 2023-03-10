module.exports = (sequelize, Sequelize) => {
	const Folder = sequelize.define("Folders", {
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
		status: {
			type: Sequelize.STRING,
			required: true,
		},
		// imageType: {
		// 	type: Sequelize.STRING,
		// },
		// imageName: {
		// 	type: Sequelize.STRING,
		// },
		// imageData: {
		// 	type: Sequelize.BLOB('long'),
		// },
	});

	return Folder;
};
