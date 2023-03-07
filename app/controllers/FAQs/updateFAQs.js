const db = require("../../models");
const FAQs = db.FAQS;
const UpdateFAQs = async (req, res) => {
    try {
        const { id, question, answer } = req.body;
        const result = await FAQs.update(
            {
                question: question,
                answer: answer,
            },
            { where: { id: id } })
        if (!result) {
            res.json({
                message: "FAQs not Existeds!",
                status: false,
            });
        } else {
            res.json({
                message: "FAQs Updated Successfully!",
                status: true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Try Again!",
            status: false,
        });
    }
};
module.exports = UpdateFAQs;
