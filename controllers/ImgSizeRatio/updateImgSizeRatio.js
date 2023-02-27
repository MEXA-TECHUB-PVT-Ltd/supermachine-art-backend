const promoCode = require("../../models/ImgSizeRatio");

const UpdateImgSizeRatio = async (req, res) => {
    try {
        const { _id, imageSize } = req.body;
        const result = await promoCode.findOneAndUpdate({ _id: _id },
            {
                imageSize: imageSize,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Img Size not Existeds!",
                result,
            });
        } else {
            res.json({
                message: "Img Size  Updated Successfully!",
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Img Size Updation Failed!",
            status: "none",
            err
        });
    }
};
module.exports = UpdateImgSizeRatio;
