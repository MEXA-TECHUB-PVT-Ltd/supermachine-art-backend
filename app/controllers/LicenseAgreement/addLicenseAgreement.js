// const LicenseAgreement = require("../../models/LicenseAgreement");

const db = require("../../models");
const LicenseAgreement = db.LicenseAgreement;
const Op = db.Sequelize.Op;


const AddLicenseAgreement = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            res.json({
                message: "title is required",
                status: false,
            });
        }
        else if (!content) {
            res.json({
                message: "content is required",
                status: false,
            });
        } else {
            const data = {
                title: title,
                content: content,
            }
            // const result = await new LicenseAgreement({ title, content });
            LicenseAgreement.create(data).then(result => {
                 res.json({
                    message: "License Agreement Added Successfully!",
                    status: true,
                    result,
                });

            })
        }
    } catch (err) {
        res.json({
            message: "License Agreement Addition failed!",
            status: false,
        });
        console.log(err)
    }
};
module.exports = AddLicenseAgreement;