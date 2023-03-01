const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdvanceStyling = new Schema({
	styleType: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("AdvanceStyling", AdvanceStyling);