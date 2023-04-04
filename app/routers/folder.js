module.exports = app => {

    const Folder = require("../controllers/Folder");

    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_folder", Folder.create);
    router.delete("/delete_folder/:id", Folder.delete);
    router.put("/update_folder", Folder.update);
    router.get("/view_all_folder_user/:id", Folder.viewUserAllFolders);
    router.get("/view_a_specific_folder_user", Folder.GetAFolder);
    router.put("/update_folder_status", Folder.UpdateFolderStatus);
    router.get("/view_all_public_folders/:id", Folder.getAllPublicFolder);
    router.get("/view_all_private_folders/:id", Folder.getAllPrivateFolder);

    app.use("/folder", router);
};
