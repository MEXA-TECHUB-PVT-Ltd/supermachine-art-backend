module.exports = (sequelize, Sequelize) => {
	const StyleTags = sequelize.define("StyleTags", {

		AdvanceStylingID: {
			type: Sequelize.INTEGER,
			req: true,
		},
		Tags: {
			type: Sequelize.STRING,
			req: true,
		},
	});
	return StyleTags;
};
