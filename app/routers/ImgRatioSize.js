module.exports = app => {

const ImgSize = require("../controllers/ImgSizeRatio");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/AddImgSize", ImgSize.create);
router.delete("/deleteImgSize/:id", ImgSize.delete);
router.put("/updateImgSize", ImgSize.update);
router.get("/viewImgSize", ImgSize.viewAll);
router.post("/viewImgSize_specific", ImgSize.viewSpecific);

app.use("/image_size", router);
};
