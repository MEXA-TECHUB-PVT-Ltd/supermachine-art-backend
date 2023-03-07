// const LicenseAgreement = require("../../models/LicenseAgreement");

const db = require("../../models");
const LicenseAgreement = db.LicenseAgreement;

const ViewLicenseAgreement = async (req, res) => {
	try {
		const result = await LicenseAgreement.findAll();
		if (!result) {
            res.json({
                message: "No License Agreement found",
                status:false,
            });
		} else {
			res.json({
                message: "Agreement data!",
                status:true,
				result
            });

		}
	} catch (err) {
		res.json({
			message: "License Agreement Fetching Failed",
			status: false,
		});
	}
};
module.exports = ViewLicenseAgreement;