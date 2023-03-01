const PrivacyPolicy = require("../../models/privacyPolicy");
const ViewPrivacyPolicy = async (req, res) => {
	try {
		const result = await PrivacyPolicy.find();
		if (!result) {
            res.json({
                message: "No Privacy Policy found",
                status: false,
            });
		} else {
			res.json({
                message: "Privacy Policy data",
                status: true,
				result
            });
		}
	} catch (err) {
		res.json({
			message: "Privcacy Policy Fetching Failed",
			status: false,
		});
	}
};
module.exports = ViewPrivacyPolicy;