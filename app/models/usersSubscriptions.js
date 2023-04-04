module.exports = (sequelize, Sequelize) => {
	const UsersSubscriptions = sequelize.define("UsersSubscriptions", {
    userID: {
        type: Sequelize.INTEGER,
        required: true,
        // ref: "User",
    },
    name: {
        type: Sequelize.STRING,
        required: true,
    },
    email: {
        type: Sequelize.STRING,
        required: true,
    },
    subscriptionID: {
        type: Sequelize.INTEGER,
        // type: mongoose.Schema.Types.ObjectId,
        required: true,
        // ref: "subscriptionPlan",
    },
});
return UsersSubscriptions;
};
