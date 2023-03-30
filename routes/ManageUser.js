module.exports = app => {
    const ViewAllUsers = require("../services/ManageUser/ViewAllUsers");
const ChangeStatus = require("../services/ManageUser/ChangeStatus");
const ViewAllBlockedUsers = require("../services/ManageUser/ViewAllBlockedUsers");
const ViewAllSubscribedUser = require("../services/ManageUser/ViewAllSubscribedUser");
const DeleteUser = require("../services/ManageUser/DeleteUser");
const SpecificUser = require("../services/ManageUser/SpecificUser");
const AllMemberUsers = require("../services/ManageUser/AllMemberUsers");

// const upload = require("../middlewares/userPicsMulter")

let router = require("express").Router();
// const formidable = require("express-formidable");
router.get("/view_all_users", ViewAllUsers);
router.post("/change_status", ChangeStatus);
router.get("/view_all_blocked_users", ViewAllBlockedUsers);
router.get("/view_all_subscribed_users", ViewAllSubscribedUser);
router.delete("/delete_user/:id", DeleteUser);
router.get("/specific_user", SpecificUser);
router.get("/all_member_users", AllMemberUsers);

app.use("/manage_users", router);
};