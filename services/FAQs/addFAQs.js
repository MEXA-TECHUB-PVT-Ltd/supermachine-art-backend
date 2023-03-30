// const FAQs = require("../../models/FAQs.model");
const db = require("../../models");
const FAQ = db.FAQS;

const AddFAQs = async (req, res) => {
    try {
        const { question, answer,likes,dislikes } = req.body;
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
            const faq = {
                question: question,
                answer: answer,
                likes:'0',
                dislikes:'0',
            };
            FAQ.create(faq).then((result) => {
                res.json({
                    message: "FAQs Added Successfully!",
                    status: true,
                    result,
                });

            })
        }
    } catch (err) {
        res.json({
            message: "Try Again!",
            status: false,
        });
    }
};
module.exports = AddFAQs;