const FAQs = require("../../models/FAQs");

const AddFAQs = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const likes = 0;
        const dislikes =0;
        if (!question) {
            res.json({
                message: "question is required",
                status: false,
            });
        } else if (!answer) {
            res.json({
                message: "answer is required",
                status: false,
            });
        } else {
            const result = await new FAQs({ question, answer, likes, dislikes });
            result.save();
            await res.json({
                message: "FAQs Added Successfully!",
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
module.exports = AddFAQs;