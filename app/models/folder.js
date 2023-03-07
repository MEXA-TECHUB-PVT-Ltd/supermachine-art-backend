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
	});

	return Folder;
};
