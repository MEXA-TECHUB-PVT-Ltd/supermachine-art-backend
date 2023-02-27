const mongoose = require("mongoose");

const { Schema } = mongoose;

const ImageSizeRatio = new Schema({
	imageSize: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("ImageSizeRatio", ImageSizeRatio);