module.exports = app => {

    const AddGalleryProfile = require("../controllers/GalleryProfile/AddGalleryProfile");
    const getAllPublicProfiles = require("../controllers/GalleryProfile/getAllPublicProfiles");
    const ViewMyProfile = require("../controllers/GalleryProfile/ViewMyProfile");
    // const UpdateFolder = require("../controllers/folder/UpdateFolder");
    // const GetAllFolderUser = require("../controllers/folder/GetAllFolderUser");
    // const GetAFolder = require("../controllers/folder/GetAFolder");
    // const UpdateFolderStatus = require("../controllers/folder/UpdateFolderStatus");

    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_gallery_profile", upload.single("photo"), AddGalleryProfile);
    // router.delete("/delete_gallery_profile/:id", DeleteFolder);
    // router.put("/update_gallery_profile", UpdateFolder);
    router.get("/view_my_profile/:id", ViewMyProfile);
    // router.get("/view_a_specific_folder_user", GetAFolder);
    // router.put("/update_folder_status", UpdateFolderStatus);
    router.get("/view_all_gallery_profiles", getAllPublicProfiles);

    app.use("/gallery_profile", router);
};
