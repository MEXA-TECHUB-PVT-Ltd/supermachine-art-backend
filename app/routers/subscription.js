module.exports = app => {

const subscriptionPlan = require("../controllers/subscriptionPlan");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_subscription_plan", subscriptionPlan.AddSubscriptionPlan);
router.get("/view_a_specific_subscription_plan", subscriptionPlan.viewASpecificSubscriptionPlan);
router.get("/view_subscription_plan", subscriptionPlan.ViewSubscriptionPlan);
router.put("/update_subscription_plan", subscriptionPlan.UpdateSubscriptionPlan);
router.get("/view_payments" , subscriptionPlan.ViewPayments)
router.delete("/delete_specific_subscription_plan/:id" , subscriptionPlan.DeleteSpecificSubscriptionPlan)
router.post("/avail_subscription" , subscriptionPlan.AvailSubscription)
router.get("/view_subscription_plan_user", subscriptionPlan.ViewSubscriptionPlanUser);
router.post("/view_aloted_sizes", subscriptionPlan.ViewSubscriptionPlanAlotedSizes);
router.put("/add_size_to_plan", subscriptionPlan.AddSizeToPlan);
router.delete("/remove_aloted_sizes/:id", subscriptionPlan.removeAlotedSize);
router.get("/view_subscription_plan_specific_user", subscriptionPlan.ViewSubscriptionPlanSpecificUser);
router.get("/view_subscription_plan_free_trail", subscriptionPlan.viewSubscriptionPlanFreeTrail);
router.get("/view_subscription_plan_user_type", subscriptionPlan.viewSubscriptionPlanbyUserType);

app.use("/Subscription", router);
};
