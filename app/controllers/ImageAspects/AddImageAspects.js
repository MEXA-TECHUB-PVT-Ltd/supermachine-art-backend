// const imageFilter = require("../../models/ImageFilters");
const db = require("../../models");
const ImageAspects = db.ImageAspects;
const Op = db.Sequelize.Op;
const AddImageAspects = async (req, res) => {
    try {
        const { name, resolution } = req.body;
        if (!name) {
            res.json({
                message: "name is required",
                status: false,
            });
        } else if (!resolution) {
            res.json({
                message: "resolution is required",
                status: false,
            });
        } else {
            const data = {
                name: name,
                resolution:resolution,
            }
            // const result = await new LicenseAgreement({ title, content });
            ImageAspects.create(data).then(result => {
                res.json({
                    message: "Image Aspects Added Successfully!",
                    status: true,
                    result,
                });

            })
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = AddImageAspects;