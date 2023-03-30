module.exports = app => {

const AddImgSize = require("../services/ImgSizeRatio/AddImgSizeRatio");
const deleteImgSize = require("../services/ImgSizeRatio/deleteImgSizeRatio");
const updateImgSize = require("../services/ImgSizeRatio/updateImgSizeRatio");
const viewImgSize  = require("../services/ImgSizeRatio/viewImgSizeRatio");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/AddImgSize", AddImgSize);
router.delete("/deleteImgSize/:id", deleteImgSize);
router.put("/updateImgSize", updateImgSize);
router.get("/viewImgSize", viewImgSize);

app.use("/image_size", router);
};
