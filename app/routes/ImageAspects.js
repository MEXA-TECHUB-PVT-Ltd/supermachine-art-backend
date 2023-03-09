module.exports = app => {

const AddImageAspects = require("../controllers/ImageAspects/AddImageAspects");
const DeleteImageAspects = require("../controllers/ImageAspects/DeleteImageAspects");
const UpdateImageAspects = require("../controllers/ImageAspects/UpdateImageAspects");
const GetAllImageAspects = require("../controllers/ImageAspects/GetAllImageAspects");
const GetImageAspects = require("../controllers/ImageAspects/GetImageAspects");

let router = require("express").Router();

router.post("/add_image_aspects", AddImageAspects);
router.delete("/delete_image_aspects/:id", DeleteImageAspects);
router.put("/update_image_aspects", UpdateImageAspects);
router.get("/get_image_aspects", GetImageAspects);
router.get("/get_all_image_aspects", GetAllImageAspects);

app.use("/image_aspects", router);
};
