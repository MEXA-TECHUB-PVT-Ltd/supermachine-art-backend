const { sql } = require("../config/db.config");
const artistlikes = function (artistLikes) {
    this.profileId = artistLikes.profileId;
    this.userID = artistLikes.userID;
};
artistlikes.likeAnArtist = async (req, res) => {
    if (!req.body.profileId || req.body.profileId === '') {
        res.json({
            message: "Please Enter your id",
            status: false,
        });
    } else if (!req.body.userID) {
        res.json({
            message: "Please Enter user_ID",
            status: false,
        });
    } else {
        sql.query(`CREATE TABLE IF NOT EXISTS public.artistLikess (
        id SERIAL,
        profileId SERIAL NOT NULL,
        userID SERIAL  NOT NULL,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id))  ` , (err, result) => {
            if (err) {
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                sql.query(`SELECT * FROM artistLikess WHERE profileId = $1 AND userid = $2`
                    , [req.body.profileId, req.body.userID], async (err, result) => {
                        if (err) {
                            res.json({
                                message: "Try Again",
                                status: false,
                                err
                            });
                        } else {
                            sql.query(`SELECT * FROM "galleryprofile" WHERE id = $1`, [req.body.profileId], async (err, results) => {
                                if (result.rows.length > 0) {
                                    sql.query(`UPDATE "galleryprofile" SET likes = $1  WHERE id = $2 `,
                                        [results.rows[0].likes - 1, req.body.profileId], async (err, result) => { });
                                    sql.query(`DELETE FROM artistLikess  WHERE profileId = $1 AND userid = $2`, [req.body.profileId, req.body.userID], (err, r) => {
                                        if (err) {
                                            res.json({
                                                message: "Try Again",
                                                status: false,
                                                err
                                            });
                                        } else {
                                            res.json({
                                                message: "Like Removed Successfully!",
                                                status: true,
                                                result: result.rows,
                                            });
                                        }
                                    })
                                } else {
                                    sql.query(`UPDATE "galleryprofile" SET likes = $1  WHERE id = $2`,
                                        [results.rows[0].likes + 1, req.body.profileId], async (err, result) => { });
                                    sql.query(`INSERT INTO artistLikess (id, profileId, userID, createdAt,updatedAt )
                            VALUES (DEFAULT, $1 ,  $2, 
                            'NOW()', 'NOW()') RETURNING * `, [req.body.profileId, req.body.userID], (err, result) => {
                                        if (err) {
                                            console.error(err);
                                            res.json({
                                                message: "Try Again",
                                                status: false,
                                                err
                                            });
                                        }
                                        else {
                                            res.json({
                                                message: "Liked Successfully!",
                                                status: true,
                                                result: result.rows,
                                            });
                                        }
                                    })
                                }
                            })

                        }
                    })
            }
        })
    }

}

artistlikes.getAllLikesOnArtist = (req, res) => {
    sql.query(`SELECT * FROM "galleryprofile" WHERE ( id = $1)`,
        [req.body.id], (err, results) => {
            if (err) {
                console.log(err);
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                sql.query(`SELECT * FROM artistLikess WHERE profileId = $1 AND userid = $2`
                , [req.body.id, req.body.userID], async (err, result) => {
                        console.log(result.rows);
                        if (result.rows.length > 0) {
                            res.json({
                                message: "Images Details",
                                status: true,
                                result: results.rows,
                                user: "liked by that user : " + result.rows[0].userid,
                            });

                        } else {
                            res.json({
                                message: "Images Details",
                                status: true,
                                result: results.rows,
                                user: "not liked by this user"
                            });
                        }
                    });
            }
        });
}

module.exports = artistlikes;