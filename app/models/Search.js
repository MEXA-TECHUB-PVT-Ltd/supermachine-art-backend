const { sql } = require("../config/db.config");
const Search = function (Search) {
    this.userID = Search.userID
    this.artID = Search.artID;
};

Search.SarchArtByName = (req, res) => {
    sql.query(`SELECT * FROM  "images" WHERE "images"."name" = $1`
        , [req.body.name],
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
                    message: "Search Result",
                    status: true,
                    result: result.rows
                });
            }
        });
}
Search.SarchArtBySeedId = (req, res) => {
    sql.query(`SELECT * FROM  "images" WHERE "images"."seedid" = $1`
        , [req.body.seedId],
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
                    message: "Search Result",
                    status: true,
                    result: result.rows
                });
            }
        });
}

Search.SarchArtistByName = (req, res) => {
    sql.query(`SELECT * FROM  "user" WHERE "user"."name" = $1`
        , [req.body.name],
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
                    message: "Search Result",
                    status: true,
                    result: result.rows
                });
            }
        });
}
Search.SarchArtistByEmail = (req, res) => {
    sql.query(`SELECT * FROM  "user" WHERE "user"."email" = $1`
        , [req.body.email],
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
                    message: "Search Result",
                    status: true,
                    result: result.rows
                });
            }
        });
}

module.exports = Search;