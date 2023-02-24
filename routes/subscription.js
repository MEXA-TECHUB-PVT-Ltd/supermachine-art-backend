const express = require("express");

const AddSubscriptionPlan = require("../controllers/subscriptionPlan/AddSubscriptionPlan");
const ViewSubscriptionPlan = require("../controllers/subscriptionPlan/ViewSubscriptionPlan");
const UpdateSubscriptionPlan = require("../controllers/subscriptionPlan/UpdateSubscriptionPlan");
const ViewPayments  = require("../controllers/subscriptionPlan/ViewPayments");
const AvailSubscription  = require("../controllers/subscriptionPlan/availSubscription");
const ViewSubscriptionPlanUser  = require("../controllers/subscriptionPlan/ViewSubscriptionPlanUser");

// const upload = require("../middlewares/userPicsMulter")
const router = express.Router();
// const formidable = require("express-formidable");

router.post("/add_subscription_plan", AddSubscriptionPlan);
router.get("/view_subscription_plan", ViewSubscriptionPlan);
router.put("/update_subscription_plan", UpdateSubscriptionPlan);
router.get("/view_payments" , ViewPayments)
router.post("/avail_subscription" , AvailSubscription)
router.get("/view_subscription_plan_user", ViewSubscriptionPlanUser);

module.exports = router;