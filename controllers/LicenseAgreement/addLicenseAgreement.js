const LicenseAgreement = require("../../models/LicenseAgreement");

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
            const result = await new LicenseAgreement({ title, content });
            result.save();
            await res.json({
                message: "License Agreement Added Successfully!",
                status:true,
                result,
            });
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