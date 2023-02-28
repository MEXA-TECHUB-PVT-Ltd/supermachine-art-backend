const LicenseAgreement = require("../../models/LicenseAgreement");
const ViewLicenseAgreement = async (req, res) => {
	try {
		const result = await LicenseAgreement.find();
		if (!result) {
			res.json("No License Agreement found");
		} else {
			res.json(result);
		}
	} catch (err) {
		res.json({
			message: "License Agreement Fetching Failed",
			status: false,
			err
		});
	}
};
module.exports = ViewLicenseAgreement;