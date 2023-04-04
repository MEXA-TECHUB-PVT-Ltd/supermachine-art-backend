module.exports = app => {

    const GalleryProfile = require("../controllers/GalleryProfile");

    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_gallery_profile", upload.single("photo"), GalleryProfile.AddGalleryProfile);
    // router.delete("/delete_gallery_profile/:id", DeleteFolder);
    // router.put("/update_gallery_profile", UpdateFolder);
    router.get("/view_my_profile/:id", GalleryProfile.ViewMyProfile);
    // router.get("/view_a_specific_folder_user", GetAFolder);
    router.put("/update_profile", upload.single("photo"), GalleryProfile.UpdateProfile);
    router.get("/view_all_gallery_profiles", GalleryProfile.getAllPublicProfiles);

    app.use("/gallery_profile", router);
};
