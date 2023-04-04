module.exports = (sequelize, Sequelize) => {
	const FAQsLikes = sequelize.define("FAQsLikes", {
		faqsId: {
			type: Sequelize.INTEGER
		},
		userID: {
			type: Sequelize.INTEGER
		},

	});
	return FAQsLikes;
};