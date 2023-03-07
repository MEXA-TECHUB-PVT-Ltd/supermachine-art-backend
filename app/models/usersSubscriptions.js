module.exports = (sequelize, Sequelize) => {
	const UsersSubscriptions = sequelize.define("UsersSubscriptions", {
    userID: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        // type: mongoose.Schema.Types.ObjectId,
        required: true,
        // ref: "subscriptionPlan",
    },
    date: {
        type: Sequelize.STRING,
        required: true,
    },
});
return UsersSubscriptions;
};
