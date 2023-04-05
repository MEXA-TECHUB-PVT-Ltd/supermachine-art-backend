const subscriptionPlan = require("../models/subscriptionPlan");
const UsersSubscriptions = require("../models/usersSubscriptions");
const sizeToPlan = require("../models/subscriptionPlanImageSize");

exports.create = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.create( req, res);
};
exports.viewSpecificPlan = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.viewSpecificPlan( req, res);
};
exports.viewAllPlans = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.viewAllPlans( req, res);
};
exports.update = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.update( req, res);
};
exports.viewPayments = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.viewPayments( req, res);
};
exports.delete = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.delete( req, res);
};
exports.AvailSubscription = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  UsersSubscriptions.AvailSubscription( req, res);
};
exports.ViewSubscriptionPlansubscriptionPlan = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.ViewSubscriptionPlansubscriptionPlan( req, res);
};
exports.ViewSubscriptionPlanAlotedSizes = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  sizeToPlan.ViewSubscriptionPlanAlotedSizes( req, res);
};
exports.AddSizeToPlan = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  sizeToPlan.AddSizeToPlan( req, res);
};
exports.removeAlotedSize = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  sizeToPlan.removeAlotedSize( req, res);
};
exports.ViewSubscriptionPlanSpecificsubscriptionPlan = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.ViewSubscriptionPlanSpecificsubscriptionPlan( req, res);
};
exports.viewSubscriptionPlanFreeTrail = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.viewSubscriptionPlanFreeTrail( req, res);
};

exports.viewSubscriptionPlanbyUserType = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  subscriptionPlan.viewSubscriptionPlanbyUserType( req, res);
};

exports.ViewSubscriptionPlanSpecificUser = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  UsersSubscriptions.ViewSubscriptionPlanSpecificUser( req, res);
};

exports.ViewSubscriptionPlanUser = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  UsersSubscriptions.ViewSubscriptionPlanUser( req, res);
};
