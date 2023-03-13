// const LicenseAgreement = require("../../models/LicenseAgreement");

const db = require("../../models");
const Folder = db.Folder;
const Op = db.Sequelize.Op;
const GalleryProfile = db.GalleryProfile;


const AddFolder = async (req, res) => {
    try {
        const { userID, name, description, status } = req.body;
        const { path } = req.file;
        let photo = '';
        if (req.file) {
            photo = path;
        }
        if (!name) {
            res.json({
                message: "Folder Name is required",
                status: false,
            });

        } else if (!description) {
            res.json({
                message: "Folder description is required",
                status: false,
            });
        } else {
            const gallery = await GalleryProfile.findOne({ where: { userID: userID } });
            if (gallery) {
                const data = {
                    name: name,
                    userID: userID,
                    image: photo,
                    description: description,
                    status: status,
                }
                Folder.create(data).then(result => {
                    res.json({
                        message: "Folder Added Successfully!",
                        status: true,
                        result,
                    });
                })
            } else {
                res.json({
                    message: "Add a Profile First!",
                    status: true,
                });
            }
        }
    } catch (err) {
        res.json({
            message: "Folder Addition failed!",
            status: false,
        });
        console.log(err)
    }
};
module.exports = AddFolder;