module.exports = (sequelize, Sequelize) => {
	const SubscriptionPlan = sequelize.define("SubscriptionPlan", {

		name: {
			type: Sequelize.STRING,
			required: true,
		},
		price: {
			type: Sequelize.STRING,
			required: true,
		},
		feature: {
			type: Sequelize.STRING,
			required: true,
		},
		duration: {
			type: Sequelize.STRING,
			required: true,
		},
		imageDownloadSize: {
			type: Sequelize.STRING,
			// type: Array,
			required: true,
		},
		imageSearches: {
			type: Sequelize.STRING,
			required: true,
		},
	});
	return SubscriptionPlan;
};
