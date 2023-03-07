module.exports = (sequelize, Sequelize) => {
	const FAQs = sequelize.define("faqs", {
		question: {
			type: Sequelize.STRING
		},
		answer: {
			type: Sequelize.STRING
		},
	});
	return FAQs;
};