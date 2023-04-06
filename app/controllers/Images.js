const Images = require("../models/Images");

// Create and Save a new Admin
exports.AddImages = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Images.AddImages( req, res);
};
exports.GetAllImagesInFolder = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Images.GetAllImagesInFolder( req, res);
};

exports.ViewUserAllImages = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Images.ViewUserAllImages( req, res);
};