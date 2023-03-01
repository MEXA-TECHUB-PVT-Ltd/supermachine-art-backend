const mongoose = require("mongoose");

const { Schema } = mongoose;

const ImageFilters = new Schema({
	filterStatus: {
		type: Boolean,
		required: true,
	},
});
module.exports = mongoose.model("ImageFilters", ImageFilters);