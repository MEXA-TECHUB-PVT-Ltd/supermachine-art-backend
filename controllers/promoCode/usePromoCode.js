const PromoCode = require("../../models/UsePromoCode");
const User = require("../../models/User");
// const Plan = require("../../models/subscriptionPlan");

const UsePromoCode = async (req, res) => {
    try {
        const { userID, promoCodeID } = req.body;
        const createdAt = new Date();
        const result = await new PromoCode({ userID, promoCodeID, createdAt });
        // const result = await User.findOneAndUpdate({ _id: userID },
        //     {
        //         type: 'subscriber',
        //     },
        //     {
        //         new: true
        //     })
        // if (!result) {
        //     res.json({
        //         message: "Subscription Failed",
        //         result,
        //     });
        // } else {
        result.save();
        res.json({
            message: "get PromoCode Sccessfully",
            status:true,
            result,
        });
        // }
        // await res.json({
        //     message: "User Get Subscription Successfully!",
        //     plan,
        // });
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = UsePromoCode;