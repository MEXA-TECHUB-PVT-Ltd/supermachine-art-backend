module.exports = (sequelize, Sequelize) => {
	const FAQs = sequelize.define("faqs", {
		question: {
			type: Sequelize.STRING
		},
		answer: {
			type: Sequelize.STRING
		},
		likes: {
			type: Sequelize.INTEGER
		},
		dislikes: {
			type: Sequelize.INTEGER
		},
	});
	return FAQs;
};