module.exports = (sequelize, Sequelize) => {
	const FAQsLikes = sequelize.define("FAQsLikes", {
		faqsId: {
			type: Sequelize.INTEGER
		},
		likes: {
			type: Sequelize.INTEGER
		},

	});
	return FAQsLikes;
};