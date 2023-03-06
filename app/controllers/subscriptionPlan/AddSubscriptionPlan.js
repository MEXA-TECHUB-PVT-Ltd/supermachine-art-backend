// const Plan = require("../../models/subscriptionPlan");
const db = require("../../models");
const Plan = db.subscriptionPlan;
const Op = db.Sequelize.Op;

const AddSubscriptionPlan = async (req, res) => {
    try {
        const { name, price, feature, duration, imageDownloadSize, imageSearches } = req.body;
        if (!price) {
            await res.json({
                message: "Price is required",
                status: false,
            });
        }
        // const exist = await User.findOne({ email });
        // if (exist) {
        //     console.log(`exists`);
        //     res.status(200).send("Email is already taken");
        // }
        else {
            const plan = await new Plan({ name, price, feature, duration, imageDownloadSize, imageSearches });
            plan.save();
            await res.json({
                message: "Subscription Plan Added Successfully!",
                status: true,
                plan,
            });
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = AddSubscriptionPlan;