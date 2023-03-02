const FAQs = require("../../models/FAQs");
const ObjectId = require("mongodb").ObjectId;

const dislikeFAQs = async (req, res) => {
    try {
        const { _id, userID } = req.body;
        const id = new ObjectId(_id)
        // const user_id = new ObjectId(userID)
        const match = await FAQs.aggregate([
            {
                "$match": {
                    dislikes: { $eq: userID },
                    _id: id
                }
            }
        ])
        if (match.length === 0) {
            const result = await FAQs.findOneAndUpdate({ _id: _id },
                {
                    $push: { dislikes: userID }
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
                    message: " Disliked Successfully!",
                    status: true,
                    result,
                });
            }
        } else {
            const result = await FAQs.findOneAndUpdate({ _id: _id },
                {
                    $pull: { dislikes: userID }
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
                    message: "Remove Disliked Successfully!",
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
module.exports = dislikeFAQs;
