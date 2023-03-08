// const User = require("../../models/User");
const db = require("../../models");
const ImageAspects = db.ImageAspects;

const UpdateImageAspects = async (req, res) => {
    try {
        const { id, name, resolution } = req.body;
        const result = await ImageAspects.update(
            {
                name: name,
                resolution:resolution,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "No Image Aspects try Again!",
                status: false,
            });
        } else {
            res.json({
                message: "Image Aspects Updated Successfully!",
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
module.exports = UpdateImageAspects;
