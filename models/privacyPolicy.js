module.exports = (sequelize, Sequelize) => {

	const privacyPolicy = sequelize.define("privacyPolicy", {
		title: {
			type: Sequelize.STRING,
			required: true,
			
		},
		content: {
			type: Sequelize.TEXT,
			required: true,
		},
	});
	return privacyPolicy;
}