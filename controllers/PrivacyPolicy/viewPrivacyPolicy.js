const PrivacyPolicy = require("../../models/privacyPolicy");
const ViewPrivacyPolicy = async (req, res) => {
	try {
		const result = await PrivacyPolicy.find();
		if (!result) {
			res.json("No Privacy Policy found");
		} else {
			res.json(result);
		}
	} catch (err) {
		res.json({
			message: "Privcacy Policy Fetching Failed",
			status: false,
			err
		});
	}
};
module.exports = ViewPrivacyPolicy;