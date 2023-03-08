// const Plan = require("../../models/usersSubscriptions");
// const User = require("../../models/User");
const db = require("../../models");
const Plan = db.usersSubscriptions;
const User = db.user;

const availSubscription = async (req, res) => {
    try {
        const { userID, name, email, subscriptionID } = req.body;
        const date = new Date();
        const data = {
            userID: userID,
            name: name,
            email: email,
            subscriptionID: subscriptionID,
            date: "date"
        }
        const plan = Plan.create(data);
        const result = await User.update(
            {
                type: 'subscriber'
            },
            { where: { id: userID } })
        // const plan = await new Plan({ userID, name , email ,subscriptionID, date });
        // const result = await User.findOneAndUpdate({ _id: userID },
        //     {
        //         type: 'subscriber',
        //     },
        //     {
        //         new: true
        //     })
        if (!result) {
            res.json({
                message: "Subscription Failed",
                status: false,
                s
            });
        } else {
            res.json({
                message: "Subscribed Successfully!",
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
module.exports = availSubscription;