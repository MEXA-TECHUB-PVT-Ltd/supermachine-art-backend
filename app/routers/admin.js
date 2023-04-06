module.exports = app => {
    const Admin = require("../controllers/admin");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/sign_up_Admin", Admin.SignUp);
    router.post("/sign_in_Admin", Admin.login);
    router.put("/admin_reset_password", Admin.resetPassword);
    
    router.post("/admin_verify_email", Admin.VerifyEmail);
    router.post("/verifyOTP", Admin.verifyOTP)
    router.post("/newPassword", Admin.newPassword)

    app.use('/auth', router);
  };