module.exports = app => {

    const GalleryImages = require("../services/GalleryImages");


    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    // router.post("/add_gallery_images", upload.single("image"), GalleryImages.AddGalleryImages);

    app.use("/gallery_images", router);
};
