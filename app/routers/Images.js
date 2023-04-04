module.exports = app => {

    const Images = require("../controllers/Images");

    const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_image", Images.AddImages);
    router.delete("/delete_folder/:id", Images.DeleteFolder);
    router.put("/update_folder", Images.UpdateFolder);
    router.get("/view_all_folder_user/:id", Images.GetAllFolderUser);
    router.get("/view_a_specific_folder_user", Images.GetAFolder);
    router.put("/update_folder_sstatus", Images.UpdateFolderStatus);
    router.get("/view_all_images_in_folder/:id", Images.GetAllImagesInFolder);
    router.get("/view_user_all_images/:id", Images.ViewUserAllImages);
    
    app.use("/images", router);
};
