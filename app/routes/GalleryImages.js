module.exports = app => {

    const AddGalleryImages = require("../controllers/GalleryImages/AddGalleryImages");
    const DeleteFolder = require("../controllers/folder/DeleteFolder");
    const UpdateFolder = require("../controllers/folder/UpdateFolder");
    const GetAllFolderUser = require("../controllers/folder/GetAllFolderUser");
    const GetAFolder = require("../controllers/folder/GetAFolder");
    const UpdateFolderStatus = require("../controllers/folder/UpdateFolderStatus");
    const getAllPublicFolder = require("../controllers/folder/getAllPublicFolder");

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
