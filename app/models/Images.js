module.exports = (sequelize, Sequelize) => {
    const Images = sequelize.define("Images", {
        userID: {
            type: Sequelize.INTEGER,
            required: true,
        },
        FolderID: {
            type: Sequelize.STRING,
            required: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        FolderStatus:{
            type: Sequelize.STRING,
            required: true,
        },
        image: {
            type: Sequelize.TEXT,
            required: true,
        },
        seedID: {
            type: Sequelize.STRING,
            required: true,
        },
    });

    return Images;
};
