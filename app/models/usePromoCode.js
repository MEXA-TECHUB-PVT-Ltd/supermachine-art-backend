module.exports = (sequelize, Sequelize) => {
    const UsePromoCode = sequelize.define("UsePromoCode", {
        userID:{
            type: Sequelize.STRING,
            required: true,
        },
        SubscriptionPlanID: {
            type: Sequelize.STRING,
            required: true,
        },
        promoCodeID: {
            type: Sequelize.STRING,
            required: true,
        },
    });
    return UsePromoCode;
};
