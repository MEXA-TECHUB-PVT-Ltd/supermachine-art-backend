module.exports = app => {

    const GalleryImages = require("../services/GalleryImages");


    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_gallery_images", upload.single("image"), GalleryImages.AddGalleryImages);
    router.delete("/delete_folder/:id", GalleryImages.DeleteFolder);
    router.put("/update_folder", GalleryImages.UpdateFolder);
    router.get("/view_all_folder_user/:id", GalleryImages.GetAllFolderUser);
    router.get("/view_a_specific_folder_user", GalleryImages.GetAFolder);
    router.put("/update_folder_status", GalleryImages.UpdateFolderStatus);
    router.get("/view_all_public_folders", GalleryImages.getAllPublicFolder);

    app.use("/gallery_images", router);
};
