const FAQS = require("../models/FAQs");
const likes = require("../models/FAQs.likes");
const dislikes = require("../models/FAQS.dislikes");


exports.create = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  FAQS.create( req, res);
};
exports.viewAll = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  FAQS.viewAll( req, res);
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  FAQS.delete( req, res);
};
exports.likeFAQs = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  likes.likeFAQs( req, res);
};
exports.dislikeFAQs = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  dislikes.dislikeFAQs( req, res);
};

exports.viewSpecific = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  FAQS.viewSpecific( req, res);
};

exports.DislikeCheck = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  FAQS.DislikeCheck( req, res);
};

exports.LikeCheck = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  FAQS.LikeCheck( req, res);
};

exports.update = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  FAQS.update( req, res);
};
