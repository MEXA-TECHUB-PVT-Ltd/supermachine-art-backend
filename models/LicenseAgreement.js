const mongoose = require("mongoose");

const { Schema } = mongoose;

const LicenseAgreement = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},

});
module.exports = mongoose.model("LicenseAgreement", LicenseAgreement);