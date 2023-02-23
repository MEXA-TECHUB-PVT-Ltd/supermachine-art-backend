const mongoose = require("mongoose");

const { Schema } = mongoose;

const SubscriptionPlan = new Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	feature: {
		type: String,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("SubscriptionPlan", SubscriptionPlan);