module.exports = (sequelize, Sequelize) => {
	const FAQsModel = sequelize.define("FAQsModel", {
		question: {
		type: Sequelize.STRING
	  },
	  answer: {
		type: Sequelize.STRING
	  },
	  likes: {
		type: Sequelize.STRING
	  },
	  dislikes: {
		type: Sequelize.STRING
	  },

	});
  
	return FAQsModel;
  };
  