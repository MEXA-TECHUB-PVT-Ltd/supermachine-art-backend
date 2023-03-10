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
        image: {
            type: Sequelize.STRING,
            required: true,
        },
        seedID: {
            type: Sequelize.STRING,
            required: true,
        },
    });

    return Images;
};
