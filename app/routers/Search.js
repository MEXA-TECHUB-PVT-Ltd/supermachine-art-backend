module.exports = app => {

const Search = require("../controllers/Search");

let router = require("express").Router();

router.get("/sarch_art_by_name", Search.SarchArtByName);
router.get("/sarch_art_by_seedId", Search.SarchArtBySeedId);

router.get("/sarch_artist_by_name", Search.SarchArtistByName);
router.get("/sarch_artist_by_email", Search.SarchArtistByEmail);



app.use("/favorite", router);
};
