module.exports = app => {

    const SignUpAdmin = require("../services/adminAuth/SignUpAdmin");
    const sign_in_Admin = require("../services/adminAuth/sign_in_Admin");
    const AdminPasswordReset = require("../services/adminAuth/passwordReset");
    const AdminVerifyEmail = require("../services/adminAuth/VerifyEmail");
    const AdminVerifyOTP = require("../services/adminAuth/verifyOTP");
    const AdminNewPassword = require("../services/adminAuth/newPassword");


    const sign_in_All = require("../services/auth/sign_in/sign_in _All");
    const member_Sign_up = require("../services/auth/member_Sign_up");
    const passwordReset = require("../services/auth/passwordReset");
    const updateMember_Profile = require("../services/auth/updateMember_Profile");
    const newPassword = require("../services/auth/newPassword");
    const VerifyEmail = require("../services/auth/VerifyEmail");
    const verifyOTP = require("../services/auth/verifyOTP");
    // const upload = require("../middlewares/userPicsMulter")
    
    const upload = require("../middlewares/FolderImagesMulter")

    let router = require("express").Router();
    // const formidable = require("express-formidable");

    router.post("/sign_in_Admin", sign_in_Admin);
    router.post("/sign_up_Admin", SignUpAdmin);
    router.put("/admin_reset_password", AdminPasswordReset);
    router.post("/admin_verify_email", AdminVerifyEmail);
    router.post("/admin_verify_otp", AdminVerifyOTP)
    router.post("/admin_new_password", AdminNewPassword)


    router.post("/sign_in_All", sign_in_All);
    router.post("/member_sign_up", member_Sign_up);
    router.put("/resetPassword", passwordReset);
    router.put("/updateMember_Profile", upload.single("photo"), updateMember_Profile);
    router.post("/verifyEmail", VerifyEmail);
    router.post("/verifyOTP", verifyOTP)
    router.post("/newPassword", newPassword)

    app.use("/auth", router);
};
