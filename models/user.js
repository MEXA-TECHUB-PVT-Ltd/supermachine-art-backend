module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("User", {
		name: {
			type: Sequelize.STRING,
			required: true,
		},
		gender: {
			type: Sequelize.STRING,
			required: true,
		},
		phone: {
			type: Sequelize.STRING,
			required: true,
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
