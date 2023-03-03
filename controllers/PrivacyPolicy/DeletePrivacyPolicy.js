const PrivacyPolicy = require("../../models/privacyPolicy");

const DeletePrivacyPolicy = async (req, res) => {
    try {
        const result = await PrivacyPolicy.findOneAndDelete({ _id: req.params.id });
        if (result) {
            await res.json({
                message: "Privacy Policy Deleted Successfully!",
                status: true,
                result,
            });
        } else {
            await res.json({
                message: "Privacy Policy not Found ",
                status: false,
            });
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = DeletePrivacyPolicy;