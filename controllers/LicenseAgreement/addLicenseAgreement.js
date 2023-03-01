const LicenseAgreement = require("../../models/LicenseAgreement");

const AddLicenseAgreement = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            res.status(400).send("title is required");
        }
        if (!content) {
            res.status(400).send("content is required");
        }
        const result = await new LicenseAgreement({ title, content });
        result.save();
        await res.json({
            message: "License Agreement Added Successfully!",
            result,
        });
    } catch (err) {
        res.json({
            message: "License Agreement Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddLicenseAgreement;