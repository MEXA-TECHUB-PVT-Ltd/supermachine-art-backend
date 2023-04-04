module.exports = app => {
    const Admin = require("../controllers/admin");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/sign_up_Admin", Admin.SignUp);
    router.post("/sign_in_Admin", Admin.login);
    router.put("/admin_reset_password", Admin.resetPassword);
    

    app.use('/auth', router);
  };