const { sql } = require("../config/db.config");
const { grpc } = require("@improbable-eng/grpc-web");


const allimages = function (Images) {

    this.userID = Images.userID;
    this.FolderID = Images.FolderID
    this.name = Images.name;
    this.negativePrompt = Images.negativePrompt;
    this.FolderStatus = Images.FolderStatus;
    this.likes = Images.likes;
    this.image = Images.image;
    this.seedID = Images.seedID;

};

allimages.CreateImage = async (req, res) => {

    if (!req.body.prompt || req.body.prompt === '') {
        res.json({
            message: "Please Enter prompt",
            status: false,
        });
    } else {
        const metadata = new grpc.Metadata();
        metadata.set("Authorization", "Bearer " + "sk-7lLuis4SMKjmuqwI1SziYBrumJpNPEePn1vUlTGgDrxd7fKc");


        // Create a generation client to use with all future requests
        // const client = new GenerationServiceClient("https://grpc.stability.ai", {});

        let width;
        let height;
        let seedID = req.body.seedID;
        let prompt = req.body.prompt;
        let size = req.body.size;
        if (size === null) {
            width = 512;
            height = 512;

        } else {
            width = size.substring(0, size.indexOf("*"));
            let sizes = size.split('*')
            height = sizes[1];
        }
        console.log("seedID" + seedID);
        if (seedID === '' || seedID === undefined) {
            seedID = Math.floor(100000 + Math.random() * 900000);
        }
        let negativePrompt = req.body.negativePrompt;
        console.log(prompt);
        console.log(negativePrompt);
        console.log(seedID);
        console.log(width);
        console.log(height);
        const imageData = {
            text_prompts: [
                {
                    text: prompt,
                    weight: 0.5,
                },
                {
                    text: negativePrompt,
                    weight: -0.5,
                },
            ],
            cfg_scale: 13,
            height: parseInt(height),
            width: parseInt(width),
            samples: 1,
            seed: parseInt(seedID),
            steps: 25,
        };
        //  stable-diffusion-v1,
        //  stable-diffusion-v1-5
        //  stable-diffusion-512-v2-0
        //  stable-diffusion-768-v2-0
        //  stable-diffusion-512-v2-1
        //  stable-diffusion-768-v2-1
        //  stable-inpainting-v1-0
        //  stable-inpainting-512-v2-0
        // console.log(negativePrompt);
        if (prompt === '') {
            // window.alert("Enter Some Prompt Text")
            // } else if (folders.length === 0) {
            //     // window.alert("Plese Create Profile")
            // } else if (folder === '') {
            //     // window.alert("Select Folder First")
            // }
        } else {
            const response = await fetch(
                'https://api.stability.ai/v1/generation/stable-diffusion-v1-5/text-to-image',
                {
                    method: 'Post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization:
                            'Bearer sk-7lLuis4SMKjmuqwI1SziYBrumJpNPEePn1vUlTGgDrxd7fKc',
                    },
                    body: JSON.stringify(imageData),
                },
            );
            const resJson = await response.json();
            console.log(resJson);
            let contentType = 'image/png';
            let b64Data = ''.concat(resJson?.artifacts[0].base64);
            let dataUrl = 'data:'.concat(contentType, ';base64,').concat(b64Data);
            //  console.log('dataurl==============', dataUrl);
            console.log(dataUrl);
            const seed = resJson?.artifacts[0].seed;


            sql.query(`CREATE TABLE IF NOT EXISTS public.Images (
                id SERIAL NOT NULL,
                userID SERIAL NOT NULL ,
                FolderID SERIAL,
                name text,
                negativePrompt text,
                FolderStatus text,
                likes SERIAL,
                image text ,
                seedID text ,
                createdAt timestamp,
                updatedAt timestamp ,
                PRIMARY KEY (id));  ` , async (err, result) => {
                if (err) {
                    res.json({
                        message: "Try Again",
                        status: false,
                        err
                    });
                } else {
                    if (!req.body.prompt || req.body.prompt === '') {
                        res.json({
                            message: "Please Enter name",
                            status: false,
                        });
                    } else {
                        let queryx = `SELECT
                "folder".status
              FROM "folder" where id=${req.body.FolderID}`;
                        const results = await sql.query(queryx);
                        const status = results.rows[0].status;
                        const { userID, FolderID} = req.body;
                        const query = `INSERT INTO "images"
                         (id, userID,FolderID, name ,negativePrompt ,FolderStatus,image,seedID  ,createdAt ,updatedAt )
                                    VALUES (DEFAULT, $1, $2, $3, $4, $5, $6,$7, 'NOW()','NOW()' ) RETURNING * `;
                        const foundResult = await sql.query(query,
                            [userID, FolderID, prompt, negativePrompt, status, dataUrl, seedID]);
                        if (foundResult.rows.length > 0) {
                            if (err) {
                                res.json({
                                    message: "Try Again",
                                    status: false,
                                    err
                                });
                            }
                            else {
                                console.log(foundResult.rows[0].id)
                                const query2 = `SELECT *  FROM "user" WHERE id = $1`;
                                const result = await sql.query(query2,
                                    [userID]);

                                res.json({
                                    message: 'Image Generates with following parameters',
                                    status: true,                                    width: width,
                                    height: height,
                                    prompt: prompt,
                                    negativePrompt: negativePrompt,
                                    width: width,
                                    height: height,
                                    prompt: prompt,
                                    negativePrompt: negativePrompt,
                                    result: foundResult.rows,
                                    user: result.rows,
                
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
        // } else {
        //     const request = buildGenerationRequest("stable-diffusion-v1", {
        //         type: "text-to-image",
        //         // prompts=[generation.Prompt(text = "a mountain landscape", parameters = generation.PromptParameters(weight = 1)),
        //         // generation.Prompt(text = "in the style of thomas kinkade", parameters = generation.PromptParameters(weight = 1)),
        //         // generation.Prompt(text = "tree", parameters = generation.PromptParameters(weight = -1.3))]
        //         prompts: [
        //             {
        //                 text: prompt,
        //                 weight: 1,
        //             },
        //             {
        //                 text: negativePrompt,
        //                 weight: -1,
        //             }
        //         ],
        //         width: width,
        //         height: height,
        //         seed: seedID,
        //         samples: 1,
        //         cfgScale: 13,
        //         steps: 25,
        //         sampler: generation.DiffusionSampler.SAMPLER_K_DPMPP_2M,
        //     });
        //     // Realistic
        //     // Oil painting
        //     // Pencil drawing
        //     // Concept art
        //     // “A landscape painting of a panda habitat”
        //     // An oil painting of a panda by Leonardo da Vinci and Frederic Edwin Church, highly-detailed, dramatic lighting

        //     executeGenerationRequest(client, request, metadata)
        //         .then(onGenerationComplete)
        //         .catch((error) => {
        //             console.error("Failed to make text-to-image request:", error);
        //         });



        // }
    }


}







allimages.AddImages = async (req, res) => {
    sql.query(`CREATE TABLE IF NOT EXISTS public.Images (
                id SERIAL NOT NULL,
                userID SERIAL NOT NULL ,
                FolderID SERIAL,
                name text,
                negativePrompt text,
                FolderStatus text,
                likes SERIAL,
                image text ,
                seedID text ,
                createdAt timestamp,
                updatedAt timestamp ,
                PRIMARY KEY (id));  ` , async (err, result) => {
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
                const { userID, FolderID, name, negativePrompt, FolderStatus, image,
                    seedID } = req.body;
                const query = `INSERT INTO "images"
                         (id, userID,FolderID, name ,negativePrompt ,FolderStatus,image,seedID  ,createdAt ,updatedAt )
                                    VALUES (DEFAULT, $1, $2, $3, $4, $5, $6,$7, 'NOW()','NOW()' ) RETURNING * `;
                const foundResult = await sql.query(query,
                    [userID, FolderID, name, negativePrompt, status, image, seedID]);
                if (foundResult.rows.length > 0) {
                    if (err) {
                        res.json({
                            message: "Try Again",
                            freeTrailDays: false,
                            err
                        });
                    }
                    else {
                        console.log(foundResult.rows[0].id)
                        const query2 = `SELECT *  FROM "user" WHERE id = $1`;
                        const result = await sql.query(query2,
                            [userID]);

                        res.json({
                            message: "Images Added Successfully!",
                            status: true,
                            result: foundResult.rows,
                            user: result.rows
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




allimages.ViewUserAllImages = (req, res) => {
    sql.query(`SELECT * FROM "images" WHERE  userid = $1 AND folderstatus = 'public' ORDER BY createdat DESC `, [req.body.userID], (err, result) => {
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
allimages.GetAllImagesInFolder = (req, res) => {
    sql.query(`SELECT * FROM "images" WHERE ( folderid = $1)`,
        [req.body.folderID], (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                console.log(result.rows);
                res.json({
                    message: "Images Details",
                    status: true,
                    result: result.rows
                });
            }
        });
}


allimages.ViewSpecificImage = (req, res) => {
    sql.query(`SELECT * FROM "images" WHERE  id = $1 ORDER BY createdat DESC `, [req.params.id], (err, result) => {
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




allimages.DeleteImages = async (req, res) => {
    const data = await sql.query(`select * from "images" where id = $1`, [req.params.id]);
    if (data.rows.length === 1) {
        sql.query(`DELETE FROM "images" WHERE id = $1;`, [req.params.id], (err, result) => {
            if (err) {
                res.json({
                    message: "Try Again",
                    status: false,
                    err
                });
            } else {
                res.json({
                    message: " image Deleted Successfully!",
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
module.exports = allimages;