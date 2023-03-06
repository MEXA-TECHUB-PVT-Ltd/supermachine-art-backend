module.exports = (sequelize, Sequelize) => {
	const AdvanceStyling = sequelize.define("AdvanceStyling", {
	styleType: {
		type: Sequelize.STRING,
		required: true,
	},
});
return AdvanceStyling
};