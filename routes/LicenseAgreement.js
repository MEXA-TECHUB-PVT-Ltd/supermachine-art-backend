module.exports = app => {

const addLicenseAgreement = require("../services/LicenseAgreement/addLicenseAgreement");
const updateLicenseAgreement = require("../services/LicenseAgreement/updateLicenseAgreement");
const viewLicenseAgreement  = require("../services/LicenseAgreement/viewLicenseAgreement");

let router = require("express").Router();

router.post("/add_license_agreement", addLicenseAgreement);
router.put("/update_license_agreement", updateLicenseAgreement);
router.get("/view_license_agreement", viewLicenseAgreement);

app.use("/license_agreement", router);
};