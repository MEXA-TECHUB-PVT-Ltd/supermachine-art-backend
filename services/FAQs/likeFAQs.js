const db = require("../../models");
// const FAQs = db.FAQS;
const likes = db.likes;

// const ObjectId = require("mongodb").ObjectId;

const likeFAQs = async (req, res) => {
    try {
        const { id, userID } = req.body;
        // const _id = new ObjectId(id)
        // const user_id = new ObjectId(userID)
        const matchLikes = await likes.findOne(
            { where: { likes: userID } }
        );
        if (matchLikes===null) {
            const data = {
                faqsId:id,
                likes: userID
            };
            likes.create(data).then(result => {
                res.json({
                    message: "liked Successfully!",
                    status: true,
                    result,
                });

            })
        } else {
            const result = await likes.destroy({ where: { FAQsID:id, likes: userID } })
            res.json({
                message: "Remove like Successfully!",
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
