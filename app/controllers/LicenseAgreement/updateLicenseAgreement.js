// const LicenseAgreement = require("../../models/LicenseAgreement");

const db = require("../../models");
const LicenseAgreement = db.LicenseAgreement;

const UpdateLicenseAgreement = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        const result = await LicenseAgreement.update(
            {
                title: title,
                content: content,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "License Agreement not Existeds!",
                status: false,
            });
        } else {
            res.json({
                message: "License Agreement Updated Successfully!",
                status: true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "License Agreement Updation Failed!",
            status: false,
        });
    }
};
module.exports = UpdateLicenseAgreement;
