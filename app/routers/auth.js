module.exports = app => {

    const user = require("../controllers/user");
    
    const upload = require("../middlewares/FolderImagesMulter")

    let router = require("express").Router();

    router.post("/sign_in_All", user.sign_in_All);
    router.post("/member_sign_up", user.member_Sign_up);
    router.put("/resetPassword", user.passwordReset);
    router.put("/updateMember_Profile", upload.single("photo"), user.updateMember_Profile);
    router.post("/verifyEmail", user.VerifyEmail);
    router.post("/verifyOTP", user.verifyOTP)
    router.post("/newPassword", user.newPassword)

    app.use("/auth", router);
};
