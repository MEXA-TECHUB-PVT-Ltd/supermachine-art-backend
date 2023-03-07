module.exports = (sequelize, Sequelize) => {
	const FAQsLikes = sequelize.define("FAQsLikes", {
		FAQsID: {
			type: Sequelize.INTEGER
		},
		likes: {
			type: Sequelize.INTEGER
		},

	});
	return FAQsLikes;
};