// const LicenseAgreement = require("../../models/LicenseAgreement");

const db = require("../../models");
const GalleryProfile = db.GalleryProfile;
const Op = db.Sequelize.Op;
const Folder = db.Folder;

const AddGalleryProfile = async (req, res) => {
    try {
        const { userID, name, description } = req.body;
        let photo = '';
        if (req.file) {
            const { path } = req.file;
            photo = path;
        }
        if (!name) {
            res.json({
                message: "Gallery Profile Name is required",
                status: false,
            });

        } else if (!description) {
            res.json({
                message: "Gallery Profile description is required",
                status: false,
            });
        } else {
            const data = {
                name: name,
                userID: userID,
                image: photo,
                description: description,
            }
            const profile = await GalleryProfile.findOne({ where: { userID: userID } });
            if (profile) {
                res.json({
                    message: "Gallery Profile Already Exists!",
                    status: true,
                });
            } else {
                const data = {
                    name: `${name}(default)`,
                    userID: userID,
                    image: '',
                    description: description,
                    status: 'private',
                }
                Folder.create(data);
                GalleryProfile.create(data).then(result => {
                    res.json({
                        message: "Gallery Profile Added Successfully!",
                        status: true,
                        result,
                    });
                })
            }
        }
    } catch (err) {
        res.json({
            message: "Gallery Profile Addition failed!",
            status: false,

        });
    }
};
module.exports = AddGalleryProfile;