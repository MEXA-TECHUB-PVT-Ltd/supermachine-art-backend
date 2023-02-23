const Plan = require("../../models/subscriptionPlan");

const AddSubscriptionPlan = async (req, res) => {
    try {
        const { name, type, price, feature } = req.body;
        console.log(req.body);
        if (!price) {
            res.status(400).send("Price is required");
        }
        // const exist = await User.findOne({ email });
        // if (exist) {
        //     console.log(`exists`);
        //     res.status(200).send("Email is already taken");
        // }
        else {
            const plan = await new Plan({ name, type, price, feature });
            plan.save();
            await res.json({
                message: "Subscription Plan Added Successfully!",
                plan,
            });
        }
    } catch (err) {
        res.json({
            message: "Subscription Plan Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddSubscriptionPlan;