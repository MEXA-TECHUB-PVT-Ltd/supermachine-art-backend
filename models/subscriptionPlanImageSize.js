module.exports = (sequelize, Sequelize) => {
    const subscriptionPlanImageSize = sequelize.define("subscriptionPlanImageSize", {
        SubscriptionPlanID: {
            type: Sequelize.INTEGER,
            required: true,
        },
        ImageSize: {
            type: Sequelize.STRING,
            required: true,
        },
        SizeID: {
            type: Sequelize.INTEGER,
            required: true,
        },

    });
    return subscriptionPlanImageSize;
};
