const Admin = require("../models/admin");
const otp = require("../models/otp");

// Create and Save a new Admin
exports.SignUp = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Admin.create( req, res);
};
exports.login = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Admin.login( req, res);
};

exports.resetPassword = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Admin.resetPassword( req, res);
};
exports.VerifyEmail = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.VerifyEmail( req, res);
};
exports.newPassword = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Admin.newPassword( req, res);
};
exports.verifyOTP = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.verifyOTP( req, res);
};