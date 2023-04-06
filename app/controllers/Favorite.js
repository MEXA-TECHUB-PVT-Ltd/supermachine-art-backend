const Favorite = require("../models/favorite");
const favoriteArtist = require("../models/favoriteArtist");

exports.addArtInFav = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Favorite.addArtInFav( req, res);
};
exports.addArtistInFav = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  favoriteArtist.addArtistInFav( req, res);
};
exports.viewAllFavArts = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Favorite.viewAllFavArts( req, res);
};

exports.viewAllFavArtists = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  favoriteArtist.viewAllFavArtists( req, res);
};
exports.viewSpecificFavArtDetails = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Favorite.viewSpecificFavArtDetails( req, res);
};
exports.viewSpecificFavArtistDetails = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  favoriteArtist.viewSpecificFavArtistDetails( req, res);
};
