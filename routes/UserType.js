const express = require("express");

const AddUserType = require("../controllers/Usertype/AddUserType");
const deleteUserType = require("../controllers/Usertype/deleteUserType");
const updateUserType = require("../controllers/Usertype/updateUserType");
const viewUserType  = require("../controllers/Usertype/viewUserType");

// const upload = require("../middlewares/userPicsMulter")
const router = express.Router();
// const formidable = require("express-formidable");

router.post("/add_user_type", AddUserType);
router.delete("/delete_user_type/:id", deleteUserType);
router.put("/update_user_type", updateUserType);
router.get("/view_user_type", viewUserType);

module.exports = router;