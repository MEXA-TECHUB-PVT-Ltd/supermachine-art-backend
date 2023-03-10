module.exports = app => {

    const AddImages = require("../controllers/Images/AddImages");
    const DeleteFolder = require("../controllers/folder/DeleteFolder");
    const UpdateFolder = require("../controllers/folder/UpdateFolder");
    const GetAllFolderUser = require("../controllers/folder/GetAllFolderUser");
    const GetAFolder = require("../controllers/folder/GetAFolder");
    const UpdateFolderStatus = require("../controllers/folder/UpdateFolderStatus");
    const GetAllImagesInFolder = require("../controllers/Images/GetAllImagesInFolder");

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

    app.use("/images", router);
};
