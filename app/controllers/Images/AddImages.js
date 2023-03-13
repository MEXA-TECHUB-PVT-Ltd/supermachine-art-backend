// const LicenseAgreement = require("../../models/LicenseAgreement");

const db = require("../../models");
const Image = db.Images;
const Op = db.Sequelize.Op;


const AddImage = async (req, res) => {
    try {
        const { userID, FolderID, name, image , seedID} = req.body;
        // const { path } = req.file;
        // console.log(req);
        // let photo = '';
        // if (req.file) {
        //      photo = path;
        // }
        if (!name) {
            res.json({
                message: "Name is required",
                status: false,
            });

        } else if (!seedID) {
            res.json({
                message: "seedID is required",
                status: false,
            });
        } else {
            const data = {
                userID: userID,
                FolderID: FolderID,
                name:name,
                image:image,
                seedID:seedID,
            }
            Image.create(data).then(result => {
                res.json({
                    message: "Image Added Successfully!",
                    status: true,
                    result,
                });
            })
        }
    } catch (err) {
        res.json({
            message: "Folder Addition failed!",
            status: false,
        });
        console.log(err)
    }
};
module.exports = AddImage;