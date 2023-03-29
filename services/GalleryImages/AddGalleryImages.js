// const LicenseAgreement = require("../../models/LicenseAgreement");

const db = require("../../models");
const GalleryImages = db.GalleryImages;
const Op = db.Sequelize.Op;


const AddGalleryImages = async (req, res) => {
    try {
        const { folderID} = req.body;

        const { path } = req.file;
        console.log(path);
        let image = '';
        if (req.file) {
            image = path;
        }
        if (!folderID) {
            res.json({
                message: "folder is required",
                status: false,
            });
        } else {
            const data = {
                folderID: folderID,
                image:image,
            }
            GalleryImages.create(data).then(result => {
                res.json({
                    message: "Images Added to Gallery Successfully!",
                    status: true,
                    result,
                });
            })
        }
    } catch (err) {
        res.json({
            message: "Images Addition to Gallery failed!",
            status: false,
        });
        console.log(err)
    }
};
module.exports = AddGalleryImages;