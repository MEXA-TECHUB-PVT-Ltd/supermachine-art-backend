module.exports = app => {

const AddSubscriptionPlan = require("../services/subscriptionPlan/AddSubscriptionPlan");
const ViewSubscriptionPlan = require("../services/subscriptionPlan/ViewSubscriptionPlan");
const UpdateSubscriptionPlan = require("../services/subscriptionPlan/UpdateSubscriptionPlan");
const ViewPayments  = require("../services/subscriptionPlan/ViewPayments");
const AvailSubscription  = require("../services/subscriptionPlan/availSubscription");
const ViewSubscriptionPlanUser  = require("../services/subscriptionPlan/ViewSubscriptionPlanUser");
const ViewSubscriptionPlanAlotedSizes  = require("../services/subscriptionPlan/ViewSubscriptionPlanAlotedSizes");
const AddSizeToPlan  = require("../services/subscriptionPlan/AddSizeToPlan");
const removeAlotedSize  = require("../services/subscriptionPlan/removeAlotedSize");
const viewASpecificSubscriptionPlan  = require("../services/subscriptionPlan/viewASpecificSubscriptionPlan");
const ViewSubscriptionPlanSpecificUser  = require("../services/subscriptionPlan/ViewSubscriptionPlanSpecificUser");
const DeleteSpecificSubscriptionPlan  = require("../services/subscriptionPlan/DeleteSpecificSubscriptionPlan");
const viewSubscriptionPlanFreeTrail  = require("../services/subscriptionPlan/viewSubscriptionPlanFreeTrail");
const viewSubscriptionPlanbyUserType  = require("../services/subscriptionPlan/viewSubscriptionPlanbyUserType");

// const upload = require("../middlewares/userPicsMulter")
let router = require("express").Router();
// const formidable = require("express-formidable");

router.post("/add_subscription_plan", AddSubscriptionPlan);
router.get("/view_a_specific_subscription_plan", viewASpecificSubscriptionPlan);
router.get("/view_subscription_plan", ViewSubscriptionPlan);
router.put("/update_subscription_plan", UpdateSubscriptionPlan);
router.get("/view_payments" , ViewPayments)
router.delete("/delete_specific_subscription_plan/:id" , DeleteSpecificSubscriptionPlan)
router.post("/avail_subscription" , AvailSubscription)
router.get("/view_subscription_plan_user", ViewSubscriptionPlanUser);
router.post("/view_aloted_sizes", ViewSubscriptionPlanAlotedSizes);
router.put("/add_size_to_plan", AddSizeToPlan);
router.delete("/remove_aloted_sizes/:id", removeAlotedSize);
router.get("/view_subscription_plan_specific_user", ViewSubscriptionPlanSpecificUser);
router.get("/view_subscription_plan_free_trail", viewSubscriptionPlanFreeTrail);
router.get("/view_subscription_plan_user_type", viewSubscriptionPlanbyUserType);

app.use("/Subscription", router);
};
