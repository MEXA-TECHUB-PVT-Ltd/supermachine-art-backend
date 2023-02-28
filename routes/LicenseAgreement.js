const express = require("express");

const addLicenseAgreement = require("../controllers/LicenseAgreement/addLicenseAgreement");
const updateLicenseAgreement = require("../controllers/LicenseAgreement/updateLicenseAgreement");
const viewLicenseAgreement  = require("../controllers/LicenseAgreement/viewLicenseAgreement");

const router = express.Router();

router.post("/add_license_agreement", addLicenseAgreement);
router.put("/update_license_agreement", updateLicenseAgreement);
router.get("/view_license_agreement", viewLicenseAgreement);

module.exports = router;