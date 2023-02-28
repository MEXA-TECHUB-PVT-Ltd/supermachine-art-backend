const ImgSizeRatio = require("../../models/ImgSizeRatio");

const AddImgSizeRatio = async (req, res) => {
    try {
        const { imageSize } = req.body;
        if (!imageSize) {
            res.status(400).send("imageSize is required");
        }
        const result =  new ImgSizeRatio({ imageSize });
        result.save();
        await res.json({
            message: "imageSize Added Successfully!",
            result,
        });
    } catch (err) {
        res.json({
            message: "imageSize Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddImgSizeRatio;