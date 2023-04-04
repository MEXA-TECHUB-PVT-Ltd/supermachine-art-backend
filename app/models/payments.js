module.exports = (sequelize, Sequelize) => {
	const Payments = sequelize.define("Payments", {

		paypal_payment_id: {
			type: Sequelize.STRING,
			required: true,
		},
		user_name: {
			type: Sequelize.STRING,
			required: true,
		},
		user_email: {
			type: Sequelize.STRING,
			required: true,
		},
		user_id: {
			type: Sequelize.STRING,
			required: true,
			// ref: "User",
		},
		plan_name: {
			type: Sequelize.STRING,
			required: true,
		},
		amount: {
			type: Sequelize.STRING,
			required: true,
		},
		description: {
			type: Sequelize.STRING,
			required: true,
		},
	});
	return Payments;
};
