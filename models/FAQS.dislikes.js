module.exports = (sequelize, Sequelize) => {
	const FAQsDislikes = sequelize.define("FAQsDislikes", {
		faqsId: {
			type: Sequelize.INTEGER
		},
		userID: {
			type: Sequelize.INTEGER
		},

	});
	return FAQsDislikes;
};