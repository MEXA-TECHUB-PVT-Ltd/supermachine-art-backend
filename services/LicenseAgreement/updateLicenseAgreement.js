// const LicenseAgreement = require("../../models/LicenseAgreement");

const db = require("../../models");
const LicenseAgreement = db.LicenseAgreement;

const UpdateLicenseAgreement = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        const results = await LicenseAgreement.update(
            {
                title: title,
                content: content,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "License Agreement not Exists!",
                status: false,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "License Agreement not Exists!",
                    status: false,
                });    
            }else {
            const result = {
                title: title,
                content: content,            }
            res.json({
                message: "License Agreement Updated Successfully!",
                status: true,
                result,
            });
        }
        }
    } catch (err) {
        res.json({
            message: "License Agreement Updation Failed!",
            status: false,
        });
    }
};
module.exports = UpdateLicenseAgreement;
