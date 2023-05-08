module.exports = app => {

    const Images = require("../controllers/Images");

    let router = require("express").Router();

    router.post("/create_image", Images.CreateImage);

    router.post("/add_image", Images.AddImages);
    router.post("/view_all_images_in_folder", Images.GetAllImagesInFolder);
    router.post("/view_user_all_images", Images.ViewUserAllImages);
    router.delete("/delete_image/:id", Images.DeleteImages);
    router.get("/view_a_specific_image/:id", Images.ViewSpecificImage);

    router.post("/like_an_Art", Images.likeAnArt);
    router.post("/total_ikes_on_art", Images.getAllLikesOnArt);



    app.use("/images", router);
};
