const LicenseAgreement = require("../../models/LicenseAgreement");

const UpdateLicenseAgreement = async (req, res) => {
    try {
        const { _id, title,content } = req.body;
        const result = await LicenseAgreement.findOneAndUpdate({ _id: _id },
            {
                title: title,
                content: content,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "License Agreement not Existeds!",
                result,
            });
        } else {
            res.json({
                message: "License Agreement Updated Successfully!",
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "License Agreement Updation Failed!",
            status: "none",
            err
        });
    }
};
module.exports = UpdateLicenseAgreement;
