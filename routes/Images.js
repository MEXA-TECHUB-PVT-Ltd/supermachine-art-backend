module.exports = app => {

    const AddImages = require("../services/Images/AddImages");
    const DeleteFolder = require("../services/folder/DeleteFolder");
    const UpdateFolder = require("../services/folder/UpdateFolder");
    const GetAllFolderUser = require("../services/folder/GetAllFolderUser");
    const GetAFolder = require("../services/folder/GetAFolder");
    const UpdateFolderStatus = require("../services/folder/UpdateFolderStatus");
    const GetAllImagesInFolder = require("../services/Images/GetAllImagesInFolder");
    const ViewUserAllImages = require("../services/Images/ViewUserAllImages");

    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_image", AddImages);
    router.delete("/delete_folder/:id", DeleteFolder);
    router.put("/update_folder", UpdateFolder);
    router.get("/view_all_folder_user/:id", GetAllFolderUser);
    router.get("/view_a_specific_folder_user", GetAFolder);
    router.put("/update_folder_status", UpdateFolderStatus);
    router.get("/view_all_images_in_folder/:id", GetAllImagesInFolder);
    router.get("/view_user_all_images/:id", ViewUserAllImages);
    
    app.use("/images", router);
};
