module.exports = (sequelize, Sequelize) => {
	const subscriptionFeatures = sequelize.define("subscriptionFeatures", {
		subscriptionID: {
			type: Sequelize.INTEGER,
			required: true,
		},
		feature: {
			type: Sequelize.STRING,
			required: true,
		},
	});

	return subscriptionFeatures;
};
