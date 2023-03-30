const db = require("../../models");
const FAQs = db.FAQS;

const deletePrivacyPolicy = async (req, res) => {
    try {
        const result = await FAQs.destroy({where:{ id: req.params.id }});
        if (result) {
            await res.json({
                message: "FAQs Deleted Successfully!",
                status: true,
                result,
            });
        } else {
            await res.json({
                message: "FAQs not Found ",
                status: false,
            });
        }
    } catch (err) {
        res.json({
            message: "Try Again!",
            status: false,
        });
    }
};
module.exports = deletePrivacyPolicy;