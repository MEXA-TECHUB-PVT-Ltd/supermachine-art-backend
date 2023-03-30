module.exports = app => {

const AddImageAspects = require("../services/ImageAspects/AddImageAspects");
const DeleteImageAspects = require("../services/ImageAspects/DeleteImageAspects");
const UpdateImageAspects = require("../services/ImageAspects/UpdateImageAspects");
const GetAllImageAspects = require("../services/ImageAspects/GetAllImageAspects");
const GetImageAspects = require("../services/ImageAspects/GetImageAspects");

let router = require("express").Router();

router.post("/add_image_aspects", AddImageAspects);
router.delete("/delete_image_aspects/:id", DeleteImageAspects);
router.put("/update_image_aspects", UpdateImageAspects);
router.get("/get_image_aspects", GetImageAspects);
router.get("/get_all_image_aspects", GetAllImageAspects);

app.use("/image_aspects", router);
};
