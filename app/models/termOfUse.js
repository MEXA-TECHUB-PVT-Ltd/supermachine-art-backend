module.exports = (sequelize, Sequelize) => {
	const TermOfUse = sequelize.define("TermOfUse", {
		title: {
			type: Sequelize.STRING,
			required: true,
		},
		content: {
			type: Sequelize.STRING,
			required: true,
		},
	});
	return TermOfUse;
};
