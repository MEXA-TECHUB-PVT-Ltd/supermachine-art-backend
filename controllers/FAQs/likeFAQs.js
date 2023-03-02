const FAQs = require("../../models/FAQs");
const ObjectId = require("mongodb").ObjectId;

const likeFAQs = async (req, res) => {
    try {
        const { _id, userID } = req.body;
        const id = new ObjectId(_id)
        // const user_id = new ObjectId(userID)
        const matchLikes = await FAQs.aggregate([
            {
                "$match": {
                    likes: { $eq: userID },
                    _id: id
                }
            }
        ]);
        if (matchLikes.length !== 0) {
            const result = await FAQs.findOneAndUpdate({ _id: _id },
                {
                    $pull: { likes: userID }
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
                    message: "Remove liked Successfully!",
                    status: true,
                    result,
                });
            }

        } else {
            const result = await FAQs.findOneAndUpdate({ _id: _id },
                {
                    $push: { likes: userID }
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
                    message: "liked Successfully!",
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
module.exports = likeFAQs;
