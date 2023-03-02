const FAQs = require("../../models/FAQs");

const UpdateFAQs = async (req, res) => {
    try {
        const { _id, question,answer } = req.body;
        const result = await FAQs.findOneAndUpdate({ _id: _id },
            {
                question: question,
                answer: answer,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "FAQs not Existeds!",
                status: false,
            });
        } else {
            res.json({
                message: "FAQs Updated Successfully!",
                status:true,
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
