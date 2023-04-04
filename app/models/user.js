module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("User", {
		name: {
			type: Sequelize.STRING,
		},
		gender: {
			type: Sequelize.STRING,
		},
		phone: {
			type: Sequelize.STRING,
		},
		profileImage: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
			required: true,
		},
		password: {
			type: Sequelize.STRING,
			required: true,
		},
		type: {
			type: Sequelize.STRING,
			required: true,
			// enum: ['visitor', 'member', 'subscriber']
		},
		status: {
			type: Sequelize.STRING,
			// enum: ['unBlock', 'blocked']
		},

	});
	return User;
};
