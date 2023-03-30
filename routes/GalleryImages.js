module.exports = app => {

    const AddGalleryImages = require("../services/GalleryImages/AddGalleryImages");
    const DeleteFolder = require("../services/folder/DeleteFolder");
    const UpdateFolder = require("../services/folder/UpdateFolder");
    const GetAllFolderUser = require("../services/folder/GetAllFolderUser");
    const GetAFolder = require("../services/folder/GetAFolder");
    const UpdateFolderStatus = require("../services/folder/UpdateFolderStatus");
    const getAllPublicFolder = require("../services/folder/getAllPublicFolder");

    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_gallery_images", upload.single("image"), AddGalleryImages);
    router.delete("/delete_folder/:id", DeleteFolder);
    router.put("/update_folder", UpdateFolder);
    router.get("/view_all_folder_user/:id", GetAllFolderUser);
    router.get("/view_a_specific_folder_user", GetAFolder);
    router.put("/update_folder_status", UpdateFolderStatus);
    router.get("/view_all_public_folders", getAllPublicFolder);

    app.use("/gallery_images", router);
};
