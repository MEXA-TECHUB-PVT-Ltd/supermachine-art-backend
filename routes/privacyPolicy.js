const express = require("express");

const addPrivacyPolicy = require("../controllers/PrivacyPolicy/addPrivacyPolicy");
const updatePrivacyPolicy = require("../controllers/PrivacyPolicy/updatePrivacyPolicy");
const viewPrivacyPolicy  = require("../controllers/PrivacyPolicy/viewPrivacyPolicy");

const router = express.Router();

router.post("/add_privacy_policy", addPrivacyPolicy);
router.put("/update_privacy_policy", updatePrivacyPolicy);
router.get("/view_privacy_policy", viewPrivacyPolicy);

module.exports = router;