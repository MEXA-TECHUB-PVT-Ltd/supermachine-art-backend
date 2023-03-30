module.exports = app => {

const AddUserType = require("../services/Usertype/AddUserType");
const deleteUserType = require("../services/Usertype/deleteUserType");
const updateUserType = require("../services/Usertype/updateUserType");
const viewUserType  = require("../services/Usertype/viewUserType");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_user_type", AddUserType);
router.delete("/delete_user_type/:id", deleteUserType);
router.put("/update_user_type", updateUserType);
router.get("/view_user_type", viewUserType);

app.use("/user_type", router);
};
