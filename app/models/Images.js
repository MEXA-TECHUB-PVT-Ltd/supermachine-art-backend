const {sql} = require("../config/db.config");
const Images = function (Images) {
    this.userID = Images.userID;
    this.FolderID = Images.FolderID
    this.name = Images.name;
    this.FolderStatus = Images.FolderStatus;
    this.image = Images.image;
    this.seedID = Images.seedID;

};
Images.AddImages = async (req, res) => {
    sql.query(`CREATE TABLE IF NOT EXISTS public.Images (
                id SERIAL NOT NULL,
                userID SERIAL NOT NULL ,
                FolderID SERIAL,
                name text,
                FolderStatus text,
                image text ,
                seedID text ,
                createdAt timestamp,
                updatedAt timestamp ,
                PRIMARY KEY (id))  ` , async (err, result) => {
        if (err) {
            res.json({
                message: "Try Again",
                status: false,
                err
            });
        } else {
            if (!req.body.name || req.body.name === '') {
                res.json({
                    message: "Please Enter name",
                    status: false,
                });
            } else if (!req.body.seedID) {
                res.json({
                    message: "Please Enter seedID",
                    status: false,
                });
            } else {
                let queryx = `SELECT
                "folder".status
              FROM "folder" where id=${req.body.FolderID}`;
                const results = await sql.query(queryx);
                const status = results.rows[0].status;
                const { userID, FolderID, name, FolderStatus, image,
                    seedID } = req.body;
                const query = `INSERT INTO "images"
                         (id, userID,FolderID, name , FolderStatus,image,seedID  ,createdAt ,updatedAt )
                                    VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, 'NOW()','NOW()' ) RETURNING * `;
                const foundResult = await sql.query(query,
                    [userID, FolderID, name, status, image, seedID]);
                if (foundResult.rows.length > 0) {
                    if (err) {
                        res.json({
                            message: "Try Again",
                            freeTrailDays: false,
                            err
                        });
                    }
                    else {
                        res.json({
                            message: "Images Added Successfully!",
                            status: true,
                            result: foundResult.rows,
                        });
                    }
                } else {
                    res.json({
                        message: "Try Again",
                        status: false,
                        err
                    });
                }

            };
        }

    });
}

Images.ViewUserAllImages = (req, res) => {
    sql.query(`SELECT * FROM "images" WHERE ( userid = $1 AND folderstatus = $2)`, [req.body.userID, 'public'], (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: "Try Again",
                freeTrailDays: false,
                err
            });
        } else {
            res.json({
                message: "Images Details",
                freeTrailDays: true,
                result: result.rows
            });
        }
    });
}
Images.GetAllImagesInFolder = (req, res) => {
    console.log(req.body);
    sql.query(`SELECT * FROM "images" WHERE ( folderid = $1 AND userid = $2)`,
     [req.body.folderID, req.body.userID], (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: "Try Again",
                status: false,
                err
            });
        } else {
            res.json({
                message: "Images Details",
                status: true,
                result: result.rows
            });
        }
    });
}
 
module.exports = Images;