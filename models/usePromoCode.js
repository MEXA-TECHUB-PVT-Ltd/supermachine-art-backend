const mongoose = require("mongoose");

const { Schema } = mongoose;

const UsePromoCode = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
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