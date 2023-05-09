module.exports = app => {

const subscriptionPlan = require("../controllers/subscriptionPlan");

let router = require("express").Router();

router.post("/add_subscription_plan", subscriptionPlan.create);
router.post("/view_a_specific_subscription_plan", subscriptionPlan.viewSpecificPlan);
router.get("/view_subscription_plan", subscriptionPlan.viewAllPlans);
router.put("/update_subscription_plan", subscriptionPlan.update);
router.delete("/delete_specific_subscription_plan/:id" , subscriptionPlan.delete)
router.get("/view_subscription_plan_free_trail", subscriptionPlan.viewSubscriptionPlanFreeTrail);
router.post("/view_subscription_plan_user_type", subscriptionPlan.viewSubscriptionPlanbyUserType);

router.post("/avail_subscription" , subscriptionPlan.AvailSubscription)

router.get("/view_subscription_plan_user", subscriptionPlan.ViewSubscriptionPlanUser);
router.post("/view_subscription_plan_specific_user", subscriptionPlan.ViewSubscriptionPlanSpecificUser);


// router.get("/view_payments" , subscriptionPlan.viewPayments)
router.put("/add_size_to_plan", subscriptionPlan.AddSizeToPlan);
router.delete("/remove_aloted_sizes/:id", subscriptionPlan.removeAlotedSize);
router.post("/view_aloted_sizes", subscriptionPlan.ViewSubscriptionPlanAlotedSizes);



app.use("/Subscription", router);
};
