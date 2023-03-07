// const ImgSizeRatio = require("../../models/ImgSizeRatio");
const db = require("../../models");
const ImgSizeRatio = db.ImgSizeRatio;
const Op = db.Sequelize.Op;
const UpdateImgSizeRatio = async (req, res) => {
    try {
        const { id, imageSize } = req.body;
        await ImgSizeRatio.update(
            { imageSize: imageSize },
            { where: { id: id } }
        ).then((result) => {
            if (result == 1) {
                res.json({
                    message: "Img Size  Updated Successfully!",
                    status: true,
                    result,
                });
            } else {
                res.json({
                    message: "Img Size not Exists!",
                    status: false,
                    result,
                });
            }

        });
    } catch (err) {
        res.json({
            message: "Img Size Updation Failed!",
            status: false,
        });
    }
};
module.exports = UpdateImgSizeRatio;
