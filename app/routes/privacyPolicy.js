module.exports = app => {
const addPrivacyPolicy = require("../controllers/PrivacyPolicy/addPrivacyPolicy");
const updatePrivacyPolicy = require("../controllers/PrivacyPolicy/updatePrivacyPolicy");
const viewPrivacyPolicy  = require("../controllers/PrivacyPolicy/viewPrivacyPolicy");
const DeletePrivacyPolicy  = require("../controllers/PrivacyPolicy/DeletePrivacyPolicy");

let router = require("express").Router();

router.post("/add_privacy_policy", addPrivacyPolicy);
router.put("/update_privacy_policy", updatePrivacyPolicy);
router.get("/view_privacy_policy", viewPrivacyPolicy);
router.delete("/delete_privacy_policy/:id", DeletePrivacyPolicy);

app.use("/privacy_policy", router);
};
