const db = require("../../models");
const FAQ = db.FAQS;
const dislikes = db.dislikes;

// const ObjectId = require("mongodb").ObjectId;

const likeFAQs = async (req, res) => {
    try {
        const { FAQID, userID } = req.body;
        // const _id = new ObjectId(id)
        // const user_id = new ObjectId(userID)
        const matchLikes = await dislikes.findOne(
            { where: { userID: userID, faqsId:FAQID } }
        );
        if (matchLikes===null) {
            const results = await FAQ.increment('dislikes', { by: 1, where: { id: FAQID } });
            const data = {
                faqsId:FAQID,
                userID: userID
            };
            dislikes.create(data).then(result => {
                res.json({
                    message: "Disliked Successfully!",
                    status: true,
                    result,
                });

            })
        } else {
            const results = await FAQ.increment('dislikes', { by: -1, where: { id: FAQID } });
            const result = await dislikes.destroy({ where: { faqsId:FAQID, userID: userID } })
            res.json({
                message: "Remove Dislike Successfully!",
                status: true,
                result:matchLikes,
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
