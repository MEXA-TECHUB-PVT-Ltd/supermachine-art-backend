module.exports = (sequelize, Sequelize) => {
	const FAQsDislikes = sequelize.define("FAQsDislikes", {
		FAQsID: {
			type: Sequelize.INTEGER
		},
		dislikes: {
			type: Sequelize.INTEGER
		},

	});
	return FAQsDislikes;
};