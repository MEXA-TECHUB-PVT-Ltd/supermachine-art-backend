module.exports = app => {
const addPrivacyPolicy = require("../services/PrivacyPolicy/addPrivacyPolicy");
const updatePrivacyPolicy = require("../services/PrivacyPolicy/updatePrivacyPolicy");
const viewPrivacyPolicy  = require("../services/PrivacyPolicy/viewPrivacyPolicy");
const DeletePrivacyPolicy  = require("../services/PrivacyPolicy/DeletePrivacyPolicy");

let router = require("express").Router();

router.post("/add_privacy_policy", addPrivacyPolicy);
router.put("/update_privacy_policy", updatePrivacyPolicy);
router.get("/view_privacy_policy", viewPrivacyPolicy);
router.delete("/delete_privacy_policy/:id", DeletePrivacyPolicy);

app.use("/privacy_policy", router);
};
