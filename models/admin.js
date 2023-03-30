module.exports = (sequelize, Sequelize) => {
	const Admin = sequelize.define("admins", {
		email: {
			type: Sequelize.STRING,
			required: true,
		},
		password: {
			type: Sequelize.STRING,
			required: true,
		},
	});

	return Admin;
};
