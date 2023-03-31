// const User = require("../../models/User");
const db = require("../../models");
const GalleryProfile = db.GalleryProfile;

const UpdateProfile = async (req, res) => {
    try {
        const { id, name, description } = req.body;
        let photo;
        if (req.file) {
            const { path } = req.file;
            photo = path;
        }else {
            photo = ''
        }
        const result = await GalleryProfile.update(
            {
                name: name,
                image: photo,
                description: description,
            },
            { where: { userID: id } }
        )
        if (!result) {
            res.json({
                message: "No Gallery Profile Found try Again!",
                status: false,
            });
        } else {
            const users = await GalleryProfile.findOne({ where: { userID:id } });
            res.json({
                message: "Gallery Profile Updated Successfully!",
                status: true,
                result: users,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            result: false,
        });
    }
};
module.exports = UpdateProfile;
