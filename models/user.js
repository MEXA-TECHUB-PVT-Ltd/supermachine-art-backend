const mongoose = require("mongoose");

const { Schema } = mongoose;

const User = new Schema({
	name: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
		enum: ['visitor', 'member', 'subscriber']
	},
	status: {
		type: String,
		enum: ['unBlock', 'blocked']
	},

});
module.exports = mongoose.model("User", User);