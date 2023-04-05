module.exports = app => {

  const User = require("../controllers/user");

    var router = require("express").Router();
    const upload = require("../middlewares/userPicsMulter")


    router.post("/sign_in_All", User.login);
    router.post("/member_sign_up", User.SignUp);
    router.put("/resetPassword", User.resetPassword);
    router.put("/updateMember_Profile", upload.single("photo"), User.updateProfile);
    // router.post("/verifyEmail", User.VerifyEmail);
    // router.post("/verifyOTP", User.verifyOTP)
    // router.post("/newPassword", User.newPassword)

    app.use('/auth', router);
  };