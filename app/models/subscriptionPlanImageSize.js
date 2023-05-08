    // const subscriptionPlanImageSize = sequelize.define("subscriptionPlanImageSize", {
    //     SubscriptionPlanID: {
    //         type: Sequelize.INTEGER,
    //     ImageSize: {
    //         type: Sequelize.STRING,
    //     SizeID: {
    //         type: Sequelize.INTEGER,


    const {sql} = require("../config/db.config");
    
    const subscriptionPlanImageSize = function (subscriptionPlanImageSize) {
        this.SubscriptionPlanID = subscriptionPlanImageSize.SubscriptionPlanID
        this.ImageSize = subscriptionPlanImageSize.ImageSize;
        this.SizeID = subscriptionPlanImageSize.SizeID;;
    };
    
    subscriptionPlanImageSize.AddSizeToPlan = async (req, res) => {
        if (!req.body.ImageSize || req.body.ImageSize === '') {
            res.json({
                message: "Please Specify Image Size",
                SizeID: false,
            });
        } else {
            sql.query(`CREATE TABLE IF NOT EXISTS public.subscriptionPlanImageSize (
            id SERIAL,
            SubscriptionPlanID SERIAL NOT NULL,
            ImageSize text,
            SizeID  SERIAL NOT NULL,
            createdAt timestamp NOT NULL,
            updatedAt timestamp ,
            PRIMARY KEY (id))  ` , (err, result) => {
                if (err) {
                    res.json({
                        message: "Try Again",
                        SizeID: false,
                        err
                    });
                } else {
                    sql.query(`INSERT INTO "subscriptionplanimagesize" (id, SubscriptionPlanID, ImageSize , SizeID, createdAt ,updatedAt )
                                VALUES (DEFAULT, $1, $2  ,  
                                $3, 'NOW()', 'NOW()') RETURNING * `,
                                [req.body.SubscriptionPlanID, req.body.ImageSize, req.body.SizeID] , (err, result) => {
                        if (err) {
                            console.log(err);
                            res.json({
                                message: "Try Again",
                                SizeID: false,
                                err
                            });
                        }
                        else {
                            res.json({
                                message: "Image Size Added to subscription Plan Successfully!",
                                SizeID: true,
                                result: result.rows,
                            });
                        }
    
                    })
    
                };
            });
        }
    }
    
    
    subscriptionPlanImageSize.ViewSubscriptionPlanAlotedSizes = (req, res) => {
        sql.query(`SELECT * FROM subscriptionplanimagesize WHERE subscriptionplanid = '${req.body.id}'`, (err, result) => {
            if (err) {
                res.json({
                    message: "Try Again",
                    SizeID: false,
                    err
                });
            } else {
                res.json({
                    message: "subscription Plan aloted Image Sizes Data",
                    SizeID: true,
                    result: result.rows
                });
            }
        });
    }
    
    
    subscriptionPlanImageSize.removeAlotedSize = async (req, res) => {
        const data = await sql.query(`select * from subscriptionplanimagesize where id = ${req.params.id}`);
        if (data.rows.length === 1) {
            sql.query(`DELETE FROM subscriptionPlanImageSize WHERE id = ${req.params.id};`, (err, result) => {
                if (err) {
                    res.json({
                        message: "Try Again",
                        SizeID: false,
                        err
                    });
                } else {
                    res.json({
                        message: "subscriptionPlanImageSize Deleted Successfully!",
                        SizeID: true,
                        result: data.rows,
    
                    });
                }
            });
        } else {
            res.json({
                message: "Not Found",
                SizeID: false,
            });
        }
    }
    module.exports = subscriptionPlanImageSize;