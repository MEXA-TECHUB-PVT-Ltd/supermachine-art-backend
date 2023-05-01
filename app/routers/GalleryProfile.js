module.exports = app => {

    const GalleryProfile = require("../controllers/GalleryProfile");

    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_gallery_profile", upload.single("photo"), GalleryProfile.create);
    // router.delete("/delete_gallery_profile/:id", DeleteFolder);
    // router.put("/update_gallery_profile", UpdateFolder);
    router.get("/view_my_profile/:id", GalleryProfile.ViewMyProfile);
    // router.get("/view_a_specific_folder_user", GetAFolder);
    router.put("/update_profile", upload.single("photo"), GalleryProfile.UpdateProfile);
    router.get("/view_all_gallery_profiles", GalleryProfile.getAllPublicProfiles);
    router.delete("/delete_gallery_profile/:id", GalleryProfile.delete);

    router.post("/like_an_Artist", GalleryProfile.likeAnArtist);
    router.post("/total_ikes_on_artist", GalleryProfile.getAllLikesOnArtist);
    router.post("/count_all_images", GalleryProfile.countAllImages);


    
    app.use("/gallery_profile", router);
};
