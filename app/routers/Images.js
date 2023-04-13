module.exports = app => {

    const Images = require("../controllers/Images");

    // const upload = require("../middlewares/FolderImagesMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_image", Images.AddImages);
    router.post("/view_all_images_in_folder", Images.GetAllImagesInFolder);
    router.post("/view_user_all_images", Images.ViewUserAllImages);
    router.delete("/delete_image/:id", Images.DeleteImages);

    app.use("/images", router);
};
