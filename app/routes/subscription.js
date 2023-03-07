module.exports = app => {

const AddSubscriptionPlan = require("../controllers/subscriptionPlan/AddSubscriptionPlan");
const ViewSubscriptionPlan = require("../controllers/subscriptionPlan/ViewSubscriptionPlan");
const UpdateSubscriptionPlan = require("../controllers/subscriptionPlan/UpdateSubscriptionPlan");
const ViewPayments  = require("../controllers/subscriptionPlan/ViewPayments");
const AvailSubscription  = require("../controllers/subscriptionPlan/availSubscription");
const ViewSubscriptionPlanUser  = require("../controllers/subscriptionPlan/ViewSubscriptionPlanUser");
const ViewSubscriptionPlanAlotedSizes  = require("../controllers/subscriptionPlan/ViewSubscriptionPlanAlotedSizes");
const AddSizeToPlan  = require("../controllers/subscriptionPlan/AddSizeToPlan");
const removeAlotedSize  = require("../controllers/subscriptionPlan/removeAlotedSize");
const viewASpecificSubscriptionPlan  = require("../controllers/subscriptionPlan/viewASpecificSubscriptionPlan");
const ViewSubscriptionPlanSpecificUser  = require("../controllers/subscriptionPlan/ViewSubscriptionPlanSpecificUser");
const DeleteSpecificSubscriptionPlan  = require("../controllers/subscriptionPlan/DeleteSpecificSubscriptionPlan");

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

app.use("/Subscription", router);
};
