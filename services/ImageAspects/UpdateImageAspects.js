// const User = require("../../models/User");
const db = require("../../models");
const ImageAspects = db.ImageAspects;

const UpdateImageAspects = async (req, res) => {
    try {
        const { id, name, resolution } = req.body;
        const results = await ImageAspects.update(
            {
                name: name,
                resolution:resolution,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "No Image Aspects try Again!",
                status: false,
            });
        } else {
            
            if(results.includes(0)){
                res.json({
                    message: "Image Aspects not Exists!",
                    status: false,
                });    
            }else {
                const result={
                    name:name,
                    resolution:resolution,
                }
                res.json({
                    message: "Image Aspects Updated Successfully!",
                    status: true,
                    result,
                });
            }
            }
    } catch (err) {
        res.json({
            message: "error",
            result: false,
        });
    }
};
module.exports = UpdateImageAspects;
