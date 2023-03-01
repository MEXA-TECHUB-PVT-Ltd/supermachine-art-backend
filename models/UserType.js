const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserType = new Schema({
	type: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("UserType", UserType);