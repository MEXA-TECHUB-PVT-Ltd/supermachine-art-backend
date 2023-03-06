module.exports = (sequelize, Sequelize) => {
	const UserType = sequelize.define("UserType", {
		type: {
			type: Sequelize.STRING,
			required: true,
		},
	});
	return UserType;
};
