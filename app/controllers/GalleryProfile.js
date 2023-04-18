const GalleryProfile = require("../models/galleryprofiles");
const artistlikes = require("../models/artistlikes");


exports.create = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  GalleryProfile.create( req, res);
};


exports.ViewMyProfile = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  GalleryProfile.ViewMyProfile( req, res);
};
exports.UpdateProfile = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  GalleryProfile.UpdateProfile( req, res);
};
exports.getAllPublicProfiles = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  GalleryProfile.getAllPublicProfiles( req, res);
};

exports.getAllLikesOnArtist = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  artistlikes.getAllLikesOnArtist( req, res);
};

exports.likeAnArtist = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  artistlikes.likeAnArtist( req, res);
};


exports.delete = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  GalleryProfile.delete( req, res);
};

