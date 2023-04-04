module.exports = (sequelize, Sequelize) => {
    const userOTPVerificationSchema = sequelize.define("userOTPVerificationSchema", {
		userId: {
			type: Sequelize.STRING,
			required: true,
		},
		otp: {
			type: Sequelize.STRING,
			required: true,
		},
        email: {
			type: Sequelize.STRING,
			required: true,
		},
		status: {
			type: Sequelize.STRING,
			required: true,
		},
        // userId: mongoose.Schema.Types.ObjectId,
    });
    return userOTPVerificationSchema;
};
