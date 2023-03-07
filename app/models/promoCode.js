module.exports = (sequelize, Sequelize) => {
	const PromoCode = sequelize.define("PromoCode", {
    SubscriptionPlanID: {
        // type: mongoose.Schema.Types.ObjectId,
		type: Sequelize.NUMBER,
		required: true,
        // ref: "SubscriptionPlan",
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
    // createdAt: {
	// 	type: Sequelize.STRING,
	// 	required: true,
	// },
});
return PromoCode;
};


// // Defines an array of DataTypes.SOMETHING.
// DataTypes.ARRAY(/* DataTypes.SOMETHING */)

// // VARCHAR(255)[]
// DataTypes.ARRAY(DataTypes.STRING)

// // VARCHAR(255)[][]
// DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING))