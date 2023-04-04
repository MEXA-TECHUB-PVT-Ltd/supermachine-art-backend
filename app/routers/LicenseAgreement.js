module.exports = app => {
    const LicenseAgreement = require("../controllers/LicenseAgreement");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/add_license_agreement", LicenseAgreement.create);
    router.get("/view_license_agreement/:id", LicenseAgreement.viewSpecific);
    router.put("/update_license_agreement", LicenseAgreement.update);
    router.get("/view_All_license_agreement", LicenseAgreement.viewAll);
    router.delete("/delete_license_agreement/:id", LicenseAgreement.delete);



    app.use('/license_agreement', router);
  };