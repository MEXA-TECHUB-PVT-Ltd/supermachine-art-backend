const Images = require("../models/allimages");
const artlikes = require("../models/artlikes");

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

// Create and Save a new Admin
exports.CreateImage = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Images.CreateImage( req, res);
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

exports.ViewSpecificImage = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Images.ViewSpecificImage( req, res);
};


exports.getAllLikesOnArt = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  artlikes.getAllLikesOnArt( req, res);
};

exports.likeAnArt = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  artlikes.likeAnArt( req, res);
};



exports.DeleteImages = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Images.DeleteImages( req, res);
};