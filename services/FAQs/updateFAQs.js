const db = require("../../models");
const FAQs = db.FAQS;
const UpdateFAQs = async (req, res) => {
    try {
        const { id, question, answer } = req.body;
        const results = await FAQs.update(
            {
                question: question,
                answer: answer,
            },
            { where: { id: id } })
        if (!results) {
            res.json({
                message: "FAQs not Existess!",
                status: false,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "FAQs not Exists!",
                    status: false,
                });    
            }else {
            const result = {
                question: question,
                answer: answer,
            }
            res.json({
                message: "FAQs  Updated Successfully!",
                status: true,
                result,
            });
        }
        }
    } catch (err) {
        res.json({
            message: "Try Again!",
            status: false,
        });
    }
};
module.exports = UpdateFAQs;
