const express = require("express");
const ViewAllUsers = require("../controllers/ManageUser/ViewAllUsers");
const ChangeStatus = require("../controllers/ManageUser/ChangeStatus");
const ViewAllBlockedUsers = require("../controllers/ManageUser/ViewAllBlockedUsers");
const ViewAllSubscribedUser = require("../controllers/ManageUser/ViewAllSubscribedUser");

// const upload = require("../middlewares/userPicsMulter")

const router = express.Router();
// const formidable = require("express-formidable");
router.get("/view_all_users", ViewAllUsers);
router.post("/change_status", ChangeStatus);
router.get("/view_all_blocked_users", ViewAllBlockedUsers);
router.get("/view_all_subscribed_users", ViewAllSubscribedUser);

module.exports = router;