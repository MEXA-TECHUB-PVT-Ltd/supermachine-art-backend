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
		userType: {
			type: Sequelize.STRING,
			required: true,
		},
		noOfUsers: {
			type: Sequelize.STRING,
			required: true,
		},
		noOfImagesGenerates: {
			type: Sequelize.STRING,
			required: true,
		},
		validity: {
			type: Sequelize.STRING,
			required: true,
			//days
		},
		freeTrail: {
			type: Sequelize.STRING,
		},
		freeTrailDays: {
			type: Sequelize.STRING,
		},
		feature:{
			type: Sequelize.STRING,
		},
	});
	return SubscriptionPlan;
};
