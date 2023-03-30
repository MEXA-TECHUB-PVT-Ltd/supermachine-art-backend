const db = require("../../models");
const like = db.likes;
const FAQ = db.FAQS;


const likeFAQs = async (req, res) => {
    try {
        const { FAQID, userID } = req.body;
        const matchLikes = await like.findOne(
            { where: { userID: userID,faqsId:FAQID } }
        );
        if (matchLikes === null) {
            const results = await FAQ.increment('likes', { by: 1, where: { id: FAQID } });
            const data = {
                faqsId: FAQID,
                userID: userID
            };
            like.create(data).then(result => {
                res.json({
                    message: "liked Successfully!",
                    status: true,
                    result,
                });

            })
        } else {
            const results = await FAQ.increment('likes', { by: -1, where: { id: FAQID } });
            const result = await like.destroy({ where: { faqsId: FAQID, userID: userID } })
            res.json({
                message: "Remove like Successfully!",
                status: true,
                result : matchLikes,
            });
        }
    } catch (err) {
        res.json({
            message: "Try Again!",
            status: false,
        });
    }
};
module.exports = likeFAQs;
