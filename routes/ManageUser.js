const express = require("express");
const ViewAllUsers = require("../controllers/ManageUser/ViewAllUsers");
const ChangeStatus = require("../controllers/ManageUser/ChangeStatus");

// const upload = require("../middlewares/userPicsMulter")

const router = express.Router();
// const formidable = require("express-formidable");
router.get("/view_all_users", ViewAllUsers);
router.post("/change_status", ChangeStatus);

module.exports = router;