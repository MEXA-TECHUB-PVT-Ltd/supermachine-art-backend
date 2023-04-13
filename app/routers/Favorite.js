module.exports = app => {

const Favorite = require("../controllers/Favorite");

let router = require("express").Router();

router.post("/add_art_in_fav", Favorite.addArtInFav);
router.post("/add_artist_in_fav", Favorite.addArtistInFav);
router.post("/view_All_fav_arts", Favorite.viewAllFavArts);
router.post("/view_All_fav_artists", Favorite.viewAllFavArtists);

router.post("/view_specific_fav_art_details", Favorite.viewSpecificFavArtDetails);
router.post("/view_specific_fav_artst_details", Favorite.viewSpecificFavArtistDetails);


app.use("/favorite", router);
};
