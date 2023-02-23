const express = require("express");

const AddSubscriptionPlan = require("../controllers/subscriptionPlan/AddSubscriptionPlan");
const ViewSubscriptionPlan = require("../controllers/subscriptionPlan/ViewSubscriptionPlan");
const UpdateSubscriptionPlan = require("../controllers/subscriptionPlan/UpdateSubscriptionPlan");
const ViewPayments  = require("../controllers/subscriptionPlan/ViewPayments");

// const upload = require("../middlewares/userPicsMulter")
const router = express.Router();
// const formidable = require("express-formidable");

router.post("/add_subscription_plan", AddSubscriptionPlan);
router.get("/view_subscription_plan", ViewSubscriptionPlan);
router.put("/update_subscription_plan", UpdateSubscriptionPlan);
router.get("/view_payments" , ViewPayments)

module.exports = router;