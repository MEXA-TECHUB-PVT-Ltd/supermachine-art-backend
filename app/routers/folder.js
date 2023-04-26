module.exports = app => {

    const Folder = require("../controllers/Folder");

    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_folder", Folder.create);
    router.delete("/delete_folder/:id", Folder.delete);
    router.put("/update_folder", Folder.update);
    router.post("/view_all_folder_user/:id", Folder.viewUserAllFolders);
    router.post("/view_a_specific_folder_user", Folder.GetAFolder);
    router.put("/update_folder_status", Folder.UpdateFolderStatus);
    router.post("/view_all_public_folders", Folder.getAllPublicFolder);
    router.post("/view_all_private_folders", Folder.getAllPrivateFolder);
    router.post("/count_folder_images", Folder.countAllImagesFolder);


    // router.post("/add_image", Images.AddImages);
    // router.put("/update_folder_sstatus", Images.UpdateFolderStatus);
    // router.get("/view_all_images_in_folder/:id", Images.GetAllImagesInFolder);
    // router.get("/view_user_all_images/:id", Images.ViewUserAllImages);

    // router.post("/add_gallery_images", upload.single("image"), GalleryImages.AddGalleryImages);



    app.use("/folder", router);
};
