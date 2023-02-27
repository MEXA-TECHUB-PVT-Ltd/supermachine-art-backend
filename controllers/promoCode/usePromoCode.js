const PromoCode = require("../../models/UsePromoCode");
const User = require("../../models/User");

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
            result,
        });
        // }
        // await res.json({
        //     message: "User Get Subscription Successfully!",
        //     plan,
        // });
    } catch (err) {
        res.json({
            message: "Promo Code  getting failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = UsePromoCode;