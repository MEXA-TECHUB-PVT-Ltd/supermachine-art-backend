module.exports = app => {
    const ManageUser = require("../controllers/ManageUser");

// const upload = require("../middlewares/userPicsMulter")

let router = require("express").Router();
// const formidable = require("express-formidable");
router.get("/view_all_users", ManageUser.ViewAllUsers);
router.post("/change_status", ManageUser.ChangeStatus);
router.get("/view_all_blocked_users", ManageUser.ViewAllBlockedUsers);
router.get("/view_all_subscribed_users", ManageUser.ViewAllSubscribedUser);
router.delete("/delete_user/:id", ManageUser.DeleteUser);
router.get("/specific_user", ManageUser.SpecificUser);
router.get("/all_member_users", ManageUser.AllMemberUsers);

app.use("/manage_users", router);
};