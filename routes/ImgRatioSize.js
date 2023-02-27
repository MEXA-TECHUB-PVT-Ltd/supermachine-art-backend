const express = require("express");

const AddImgSize = require("../controllers/ImgSizeRatio/AddImgSizeRatio");
const deleteImgSize = require("../controllers/ImgSizeRatio/deleteImgSizeRatio");
const updateImgSize = require("../controllers/ImgSizeRatio/updateImgSizeRatio");
const viewImgSize  = require("../controllers/ImgSizeRatio/viewImgSizeRatio");

// const upload = require("../middlewares/userPicsMulter")
const router = express.Router();
// const formidable = require("express-formidable");

router.post("/AddImgSize", AddImgSize);
router.delete("/deleteImgSize/:id", deleteImgSize);
router.put("/updateImgSize", updateImgSize);
router.get("/viewImgSize", viewImgSize);

module.exports = router;