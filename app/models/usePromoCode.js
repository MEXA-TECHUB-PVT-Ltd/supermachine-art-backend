module.exports = (sequelize, Sequelize) => {
    const UsePromoCode = sequelize.define("UsePromoCode", {
        SubscriptionPlanID: {
            // type: mongoose.Shema.Types.ObjectId,
            type: Sequelize.STRING,
            required: true,
            // ref: "SubscriptionPlan",
        },
        promoCodeID: {
            type: Sequelize.STRING,
            // type: mongoose.Schema.Types.ObjectId,
            required: true,
            // ref: "PromoCode",
        },
        // createdAt: {
        //     type: Sequelize.STRING,
        //     required: true,
        // },
    });
    return UsePromoCode;
};
