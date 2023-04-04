const AdvanceStyling = require("../models/AdvanceStyling");

// Create and Save a new Advance Styling
exports.create = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  AdvanceStyling.create( req, res);
};
exports.viewAll = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  AdvanceStyling.viewAll( req, res);
};
exports.viewSpecific = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  AdvanceStyling.viewSpecific( req, res);
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  AdvanceStyling.delete( req, res);
};
exports.update = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  AdvanceStyling.update( req, res);
};
