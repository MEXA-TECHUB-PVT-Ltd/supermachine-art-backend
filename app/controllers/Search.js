const Search = require("../models/Search");

exports.SarchArtByName = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Search.SarchArtByName( req, res);
};
exports.SarchArtBySeedId = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Search.SarchArtBySeedId( req, res);
};
exports.SarchArtistByName = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Search.SarchArtistByName( req, res);
};

exports.SarchArtistByEmail = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  Search.SarchArtistByEmail( req, res);
};
