module.exports = app => {

    const AddGalleryProfile = require("../services/GalleryProfile/AddGalleryProfile");
    const getAllPublicProfiles = require("../services/GalleryProfile/getAllPublicProfiles");
    const ViewMyProfile = require("../services/GalleryProfile/ViewMyProfile");
    // const UpdateFolder = require("../services/folder/UpdateFolder");
    // const GetAllFolderUser = require("../services/folder/GetAllFolderUser");
    // const GetAFolder = require("../services/folder/GetAFolder");
    const UpdateProfile = require("../services/GalleryProfile/UpdateProfile");

    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_gallery_profile", upload.single("photo"), AddGalleryProfile);
    // router.delete("/delete_gallery_profile/:id", DeleteFolder);
    // router.put("/update_gallery_profile", UpdateFolder);
    router.get("/view_my_profile/:id", ViewMyProfile);
    // router.get("/view_a_specific_folder_user", GetAFolder);
    router.put("/update_profile", upload.single("photo"), UpdateProfile);
    router.get("/view_all_gallery_profiles", getAllPublicProfiles);

    app.use("/gallery_profile", router);
};
