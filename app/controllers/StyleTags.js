const StyleTags = require("../models/StyleTags");

// Create and Save a new License Agreement
exports.create = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  StyleTags.create( req, res);
};
exports.viewAll = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  StyleTags.viewAll( req, res);
};
exports.viewSpecific = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  StyleTags.viewSpecific( req, res);
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  StyleTags.delete( req, res);
};
exports.update = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  StyleTags.update( req, res);
};
