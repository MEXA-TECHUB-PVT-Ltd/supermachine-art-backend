module.exports = app => {

const addLicenseAgreement = require("../controllers/LicenseAgreement/addLicenseAgreement");
const updateLicenseAgreement = require("../controllers/LicenseAgreement/updateLicenseAgreement");
const viewLicenseAgreement  = require("../controllers/LicenseAgreement/viewLicenseAgreement");

let router = require("express").Router();

router.post("/add_license_agreement", addLicenseAgreement);
router.put("/update_license_agreement", updateLicenseAgreement);
router.get("/view_license_agreement", viewLicenseAgreement);

app.use("/license_agreement", router);
};