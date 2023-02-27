const mongoose = require("mongoose");

const { Schema } = mongoose;

const PromoCode = new Schema({
    subscriptionPlanID: {
        type: mongoose.Schema.Types.ObjectId,
		required: true,
        ref: "SubscriptionPlan",
	},
	code: {
		type: String,
		required: true,
	},
	discount: {
		type: String,
		required: true,
	},
	expiry: {
		type: String,
		required: true,
	},
    createdAt: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("PromoCode", PromoCode);