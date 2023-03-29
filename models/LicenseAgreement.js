module.exports = (sequelize, Sequelize) => {
	const LicenseAgreement = sequelize.define("LicenseAgreement", {
		title: {
			type: Sequelize.STRING,
			required: true,
		},
		content: {
			type: Sequelize.TEXT,
			required: true,
		},

	});
	return LicenseAgreement
};