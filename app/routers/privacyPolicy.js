module.exports = app => {
const PrivacyPolicy = require("../controllers/privacyPolicy");

let router = require("express").Router();

router.post("/add_privacy_policy", PrivacyPolicy.create);
router.put("/update_privacy_policy", PrivacyPolicy.update);
router.post("/view_privacy_policy", PrivacyPolicy.viewSpecific);
router.delete("/delete_privacy_policy/:id", PrivacyPolicy.delete);
router.get("/view_all_privacy_policy", PrivacyPolicy.viewAll);

app.use("/privacy_policy", router);
};
