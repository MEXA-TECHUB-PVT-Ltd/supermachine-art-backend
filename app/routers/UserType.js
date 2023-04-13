module.exports = app => {

    const UserType = require("../controllers/Usertype");

    // const upload = require("../middlewares/userPicsMulter")
    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/add_user_type", UserType.create);
    router.delete("/delete_user_type/:id", UserType.delete);
    router.put("/update_user_type", UserType.update);
    router.get("/view_user_type", UserType.viewAll);
    router.post("/view_specific_user_type", UserType.viewSpecific);

    app.use("/user_type", router);
};
