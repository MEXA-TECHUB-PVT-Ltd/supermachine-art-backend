const sql = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const StyleTags = function (StyleTags) {
    this.advancestylingid = StyleTags.advancestylingid;
    this.Tags = StyleTags.Tags;;
};

StyleTags.create = async (req, res) => {
    if (!req.body.advancestylingid || req.body.advancestylingid === '') {
        res.json({
            message: "Please Enter  advance styling id",
            status: false,
        });
    } else if (!req.body.Tags) {
        res.json({
            message: "Please Enter Tags",
            status: false,
        });
    } else {
        sql.query(`CREATE TABLE IF NOT EXISTS public."StyleTags"
        (
            id SERIAL  NOT NULL,
            "advancestylingid" SERIAL NOT NULL,
            "tags" text,
            createdAt timestamp NOT NULL,
            updatedAt timestamp ,    
            PRIMARY KEY (id),
            CONSTRAINT "advancestylingid" FOREIGN KEY ("advancestylingid")
                REFERENCES public.advancestylings (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID
        );
        ` , (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                sql.query(`INSERT INTO public."StyleTags" (id, advancestylingid , Tags, createdAt ,updatedAt )
                            VALUES (DEFAULT, '${req.body.advancestylingid}'  ,  '${req.body.Tags}', 'NOW()', 'NOW()') RETURNING * `, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.json({
                            message: "Try Again",
                            status: false,
                            err
                        });
                    }
                    else {
                        res.json({
                            message: "Style Tag Added Successfully!",
                            status: true,
                            result: result.rows,
                        });
                    }

                })

            };
        });
    }
}

StyleTags.viewSpecific = (req, res) => {
    sql.query(`SELECT * FROM public."StyleTags" WHERE id = ${req.body.id};`, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: "Try Again",
                status: false,
                err
            });
        } else {
            res.json({
                message: "Style Tag Details",
                status: true,
                result: result.rows
            });
        }
    });
}

StyleTags.viewAll = (req, res) => {
    sql.query(`SELECT * FROM public."StyleTags" WHERE AdvanceStylingID = '${req.body.AdvanceStylingID}';`, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: "Try Again",
                status: false,
                err
            });
        } else {
            res.json({
                message: "Style Tag Details",
                status: true,
                result: result.rows,
            });
        }
    });

}

StyleTags.update = (req, res) => {
    const id = req.body.id;
    console.log(id);
    if (id === '') {
        res.json({
            message: "Please Specify Tags",
            status: false,
        });
    } else {
            sql.query(`UPDATE "StyleTags" SET tags = $1 WHERE id = $2;`,
			[req.body.tags, id], async (err, result) => {

        if (err) {
                console.log(err);
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                if (result.rowCount === 1) {
                    const data = await sql.query(`select * FROM public."StyleTags" where id = '${req.body.id}'`);
                    res.json({
                        message: "Style Tag Updated Successfully!",
                        status: true,
                        result: data.rows,
                    });
                } else if (result.rowCount === 0) {
                    res.json({
                        message: "Not Found",
                        status: false,
                    });
                }
            }
        });
    }
}

StyleTags.delete = async (req, res) => {
    const data = await sql.query(`select * from public."StyleTags" where id = ${req.params.id}`);
    if (data.rows.length === 1) {
        sql.query(`DELETE FROM public."StyleTags" WHERE id = ${req.params.id};`, (err, result) => {
            if (err) {
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                res.json({
                    message: "Style Tag Deleted Successfully!",
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
module.exports = StyleTags;