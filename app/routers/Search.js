module.exports = app => {

const Search = require("../controllers/Search");

let router = require("express").Router();

router.post("/sarch_art_by_name", Search.SarchArtByName);
router.post("/sarch_art_by_seedId", Search.SarchArtBySeedId);

router.post("/sarch_artist_by_name", Search.SarchArtistByName);
router.post("/sarch_artist_by_email", Search.SarchArtistByEmail);



app.use("/favorite", router);
};
