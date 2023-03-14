// const User = require("../../models/User");
const db = require("../../models");
const GalleryProfile = db.GalleryProfile;

const UpdateProfile = async (req, res) => {
    try {
        const { id, name, description , text} = req.body;
        let photo;
        if (req.file) {
            const { path } = req.file;
            photo = path;
        }else {
            photo = text
        }
        const result = await GalleryProfile.update(
            {
                name: name,
                image: photo,
                description: description,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "No Gallery Profile Found try Again!",
                status: false,
            });
        } else {
            res.json({
                message: "Gallery Profile Updated Successfully!",
                status: true,
                result: result,
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
