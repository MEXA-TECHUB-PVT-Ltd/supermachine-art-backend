const mongoose = require("mongoose");

const { Schema } = mongoose;

const Payments = new Schema({
	paypal_payment_id: {
		type: String,
		required: true,
	},
	user_name: {
		type: String,
		required: true,
	},
	user_email: {
		type: String,
		required: true,
	},
	user_id:{
		type: String,
		required: true,
        ref:"User",
	},
	plan_name:{
		type: String,
		required: true,
	},
    amount:{
		type: String,
		required: true,
	},
    description:{
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("Payments", Payments);