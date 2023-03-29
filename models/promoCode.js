module.exports = (sequelize, Sequelize) => {
	const PromoCode = sequelize.define("PromoCode", {
		SubscriptionPlanID: {
			type: Sequelize.INTEGER,
			required: true,
		},
		code: {
			type: Sequelize.STRING,
			required: true,
		},
		discount: {
			type: Sequelize.STRING,
			required: true,
		},
		expiry: {
			type: Sequelize.STRING,
			required: true,
		},

	});
	return PromoCode;
};


// // Defines an array of DataTypes.SOMETHING.
// DataTypes.ARRAY(/* DataTypes.SOMETHING */)

// // VARCHAR(255)[]
// DataTypes.ARRAY(DataTypes.STRING)

// // VARCHAR(255)[][]
// DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING))