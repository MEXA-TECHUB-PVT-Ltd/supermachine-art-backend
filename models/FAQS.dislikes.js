module.exports = (sequelize, Sequelize) => {
	const FAQsDislikes = sequelize.define("FAQsDislikes", {
		faqsId: {
			type: Sequelize.INTEGER
		},
		dislikes: {
			type: Sequelize.INTEGER
		},

	});
	return FAQsDislikes;
};