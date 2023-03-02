const ImgSizeRatio = require("../../models/ImgSizeRatio");

const AddImgSizeRatio = async (req, res) => {
    try {
        const { imageSize } = req.body;
        if (!imageSize) {
            await res.json({
                message: "imageSize is required",
                status: false,
            });    
        }
        const result =  new ImgSizeRatio({ imageSize });
        result.save();
        await res.json({
            message: "imageSize Added Successfully!",
            status:false,
            result,
        });
    } catch (err) {
        res.json({
            message: "imageSize Addition failed!",
            status: false,
        });
        console.log(err)
    }
};
module.exports = AddImgSizeRatio;