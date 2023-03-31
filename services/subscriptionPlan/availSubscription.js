// const Plan = require("../../models/usersSubscriptions");
// const User = require("../../models/User");
const db = require("../../models");
const Plan = db.usersSubscriptions;
const User = db.user;

const availSubscription = async (req, res) => {
    try {
        const { userID, name, email, subscriptionID } = req.body;
        const data = {
            userID: userID,
            name: name,
            email: email,
            subscriptionID: subscriptionID,
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
                
            });
        } else {
            res.json({
                message: "Subscribed Successfully!",
                status: true,
                data,
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