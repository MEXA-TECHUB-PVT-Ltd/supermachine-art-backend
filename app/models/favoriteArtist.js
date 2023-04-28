const {sql} = require("../config/db.config");
const favoriteArtist = function (favoriteArtist) {
	this.userID = favoriteArtist.userID
	this.FavUserId = favoriteArtist.FavUserId;
};
favoriteArtist.addArtistInFav = async (req, res) => {
	if (!req.body.FavUserId || req.body.FavUserId === '') {
		res.json({
			message: "Please speciify favoriteArtist art",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.favoriteArtist (
        id SERIAL,
		userID SERIAL NOT NULL,
        FavUserId SERIAL NOT NULL,
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
				sql.query(`INSERT INTO favoriteArtist (id, userID, FavUserId , createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, 'NOW()', 'NOW()') RETURNING * `
							,[req.body.userID, req.body.FavUserId], (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: "Art favoriteArtists Successfully!",
							status: true,
							result: result.rows,
						});
					}

				})

			};
		});
	}
}
//  "user".phone,
// "user".profileimage, "user".email , "user".type, "user".createdat,
//  "user".updatedat
favoriteArtist.viewAllFavArtists = (req, res) => {
    sql.query(`SELECT "galleryprofile".*
      FROM "galleryprofile" 
      JOIN "favoriteartist" ON "favoriteartist"."favuserid" = "galleryprofile"."id" 
      AND "favoriteartist"."userid" = $1`
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
                    message: "All favoriteArtist Arts",
                    status: true,
                    result: result.rows
                });
            }
        });
}
favoriteArtist.viewSpecificFavArtistDetails = (req, res) => {
    sql.query(`SELECT  "galleryprofile".*
      FROM "galleryprofile" 
      JOIN "favoriteartist" ON "favoriteartist"."favuserid" = $1 AND 
	   "favoriteartist"."favuserid" = "galleryprofile"."id" AND "favoriteartist"."userid" = $2`
    , [req.body.FavUserId ,req.body.userID],
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
                    message: "favorite Artist details",
                    status: true,
                    result: result.rows
                });
            }
        });
}

favoriteArtist.removeArtistFromFav = async (req, res) => {

    if (!req.body.FavUserId || req.body.FavUserId === '') {
        res.json({
            message: "Please speciify Favorite art",
            status: false,
        });
    } else {
        const data = await sql.query(`select * from favoriteArtist where userid = $1 AND favuserid = $2`, [req.body.userID, req.body.FavUserId]);
        if (data.rows.length >= 1) {
            sql.query(`DELETE FROM favoriteArtist where userid = $1 AND favuserid = $2`, [req.body.userID, req.body.FavUserId], (err, result) => {
                if (err) {
                    res.json({
                        message: "Try Again",
                        status: false,
                        err
                    });
                } else {
                    res.json({
                        message: "Removed Successfully!",
                        status: true,
                        result: data.rows,

                    });
                }
            });
        } else {
            res.json({
                message: "Not Found",
                status: false,
            });
        }
    }

}


module.exports = favoriteArtist;