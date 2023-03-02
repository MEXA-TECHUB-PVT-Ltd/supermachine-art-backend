const mongoose = require("mongoose");

const { Schema } = mongoose;

const FAQs = new Schema({
	question: {
		type: String,
		required: true,
	},
	answer: {
		type: String,
		required: true,
	},
    likes: {
		type: Array,
	},
	dislikes: {
		type: Array,
	},

});
module.exports = mongoose.model("FAQs", FAQs);