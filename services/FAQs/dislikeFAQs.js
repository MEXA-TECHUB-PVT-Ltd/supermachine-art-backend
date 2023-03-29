const db = require("../../models");
// const FAQs = db.FAQS;
const dislikes = db.dislikes;

// const ObjectId = require("mongodb").ObjectId;

const likeFAQs = async (req, res) => {
    try {
        const { id, userID } = req.body;
        // const _id = new ObjectId(id)
        // const user_id = new ObjectId(userID)
        const matchLikes = await dislikes.findOne(
            { where: { dislikes: userID } }
        );
        if (matchLikes===null) {
            const data = {
                faqsId:id,
                dislikes: userID
            };
            dislikes.create(data).then(result => {
                res.json({
                    message: "Disliked Successfully!",
                    status: true,
                    result,
                });

            })
        } else {
            const result = await dislikes.destroy({ where: { FAQsID:id, dislikes: userID } })
            res.json({
                message: "Remove Dislike Successfully!",
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
module.exports = likeFAQs;
