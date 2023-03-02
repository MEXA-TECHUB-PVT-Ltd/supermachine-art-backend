const mongoose = require("mongoose");

const { Schema } = mongoose;

const UsePromoCode = new Schema({
    SubscriptionPlanID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "SubscriptionPlan",
    },
    promoCodeID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "PromoCode",
    },
    createdAt: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("UsePromoCode", UsePromoCode);