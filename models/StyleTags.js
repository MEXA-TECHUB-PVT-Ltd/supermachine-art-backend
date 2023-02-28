const mongoose = require("mongoose");

const { Schema } = mongoose;

const StyleTags = new Schema({
	AdvanceStylingID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "AdvanceStyling",
		req: true,
	},
	Tags: {
		type: String,
		req: true,
	},
});
module.exports = mongoose.model("StyleTags", StyleTags);