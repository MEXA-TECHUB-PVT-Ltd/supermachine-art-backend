const express = require("express");

const sign_in_Admin = require("../controllers/adminAuth/sign_in_Admin");
const AdminPasswordReset = require("../controllers/adminAuth/passwordReset");
const AdminVerifyEmail = require("../controllers/adminAuth/VerifyEmail");
const AdminVerifyOTP  = require("../controllers/adminAuth/verifyOTP");
const AdminNewPassword = require("../controllers/adminAuth/newPassword");


const sign_in_User = require("../controllers/auth/sign_in/sign_in_User");
const sign_in_All = require("../controllers/auth/sign_in/sign_in _All");
const member_Sign_up = require("../controllers/auth/member_Sign_up");
const passwordReset = require("../controllers/auth/passwordReset");
const updateMember_Profile = require("../controllers/auth/updateMember_Profile");
const newPassword = require("../controllers/auth/newPassword");
const VerifyEmail = require("../controllers/auth/VerifyEmail");
const verifyOTP  = require("../controllers/auth/verifyOTP");
// const upload = require("../middlewares/userPicsMulter")

const router = express.Router();
// const formidable = require("express-formidable");

router.post("/sign_in_Admin", sign_in_Admin);
router.put("/admin_reset_password", AdminPasswordReset);
router.post("/admin_verify_email", AdminVerifyEmail);
router.post("/admin_verify_otp" , AdminVerifyOTP)
router.post("/admin_new_password" , AdminNewPassword)


router.post("/sign_in_User", sign_in_User);
router.post("/sign_in_All", sign_in_All);
router.post("/member_sign_up" ,member_Sign_up);
router.put("/resetPassword", passwordReset);
router.put("/updateMember_Profile", updateMember_Profile);
router.post("/verifyEmail", VerifyEmail);
router.post("/verifyOTP" , verifyOTP)
router.post("/newPassword" , newPassword)

module.exports = router;