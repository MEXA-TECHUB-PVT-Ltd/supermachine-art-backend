const {sql} = require("../config/db.config");
const Favorite = function (Favorite) {
	this.userID = Favorite.userID
	this.artID = Favorite.artID;
};
Favorite.addArtInFav = async (req, res) => {
	if (!req.body.artID || req.body.artID === '') {
		res.json({
			message: "Please speciify Favorite art",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.Favorite (
        id SERIAL,
		userID SERIAL NOT NULL,
        artID text NOT NULL,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));  ` , (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				sql.query(`INSERT INTO favorite (id, userID, artID , createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, 'NOW()', 'NOW()') RETURNING * `
							,[req.body.userID, req.body.artID], (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "Art Favorites Successfully!",
							status: true,
							result: result.rows,
						});
					}

				})

			};
		});
	}
}
Favorite.viewAllFavArts = (req, res) => {
    sql.query(`SELECT "favorite".id AS "FavID",  "images".id AS "ImageID",
	"images".folderid, "images"."folderstatus", "images".name,
      "images".image, "images".seedid,"images".createdat,
       "images".updatedat
      FROM "favorite" 
      JOIN "images" ON "favorite"."artid" = "images"."id" AND "favorite"."userid" = $1`
    // sql.query(`SELECT * FROM "userssubscriptions" WHERE ( id = $1)`
    , [req.body.userID],
        (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                res.json({
                    message: "All Favorite Arts",
                    status: true,
                    result: result.rows
                });
            }
        });
}
Favorite.viewSpecificFavArtDetails = (req, res) => {
    sql.query(`SELECT "favorite".id AS "FavID",  "images".id AS "ImageID",
	"images".folderid, "images"."folderstatus", "images".name,
      "images".image, "images".seedid,"images".createdat,
       "images".updatedat
      FROM "favorite" 
      JOIN "images" ON "favorite"."artid" = $1 AND 
	   "favorite"."artid" = "images"."id" AND "favorite"."userid" = $2`
    , [req.body.artID ,req.body.userID],
        (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                res.json({
                    message: "All Favorite Arts",
                    status: true,
                    result: result.rows
                });
            }
        });
}
module.exports = Favorite;