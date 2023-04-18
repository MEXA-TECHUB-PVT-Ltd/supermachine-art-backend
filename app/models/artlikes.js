const { sql } = require("../config/db.config");
const artlikes = function (artLikes) {
    this.artid = artLikes.artid;
    this.userID = artLikes.userID;
};
artlikes.likeAnArt = async (req, res) => {
    if (!req.body.artid || req.body.artid === '') {
        res.json({
            message: "Please Enter your ID",
            status: false,
        });
    } else if (!req.body.userID) {
        res.json({
            message: "Please Enter user_ID",
            status: false,
        });
    } else {
        sql.query(`CREATE TABLE IF NOT EXISTS public.artLikess (
        id SERIAL,
        artid SERIAL NOT NULL,
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
                sql.query(`SELECT * FROM artLikess WHERE artid = $1 AND userid = $2`
                    , [req.body.artid, req.body.userID], async (err, result) => {
                        if (err) {
                            res.json({
                                message: "Try Again",
                                status: false,
                                err
                            });
                        } else {
                            sql.query(`SELECT * FROM "images" WHERE id = $1`, [req.body.artid], async (err, results) => {
                                if (result.rows.length > 0) {
                                    sql.query(`UPDATE "images" SET likes = $1  WHERE id = $2 `,
                                        [results.rows[0].likes - 1, req.body.artid], async (err, result) => { });
                                    sql.query(`DELETE FROM artLikess  WHERE artid = $1 AND userid = $2`, [req.body.artid, req.body.userID], (err, r) => {
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
                                    sql.query(`UPDATE "images" SET likes = $1  WHERE id = $2`,
                                        [results.rows[0].likes + 1, req.body.artid], async (err, result) => { });
                                    sql.query(`INSERT INTO artLikess (id, artid, userID, createdAt,updatedAt )
                            VALUES (DEFAULT, $1 ,  $2, 
                            'NOW()', 'NOW()') RETURNING * `, [req.body.artid, req.body.userID], (err, result) => {
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

artlikes.getAllLikesOnArt = (req, res) => {
    sql.query(`SELECT * FROM "images" WHERE ( id = $1)`,
        [req.body.id], (err, results) => {
            if (err) {
                console.log(err);
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                if(results.rows.length > 0) {
                sql.query(`SELECT * FROM artLikess WHERE artid = $1 AND userid = $2`
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
            } else {
                res.json({
                    message: "Not found",
                    status: false,
                });
            }
        }
        });
}

module.exports = artlikes;