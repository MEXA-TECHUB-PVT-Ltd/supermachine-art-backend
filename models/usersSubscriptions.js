const mongoose = require("mongoose");

const { Schema } = mongoose;

const UsersSubscriptions = new Schema({
    userID: {
        type: String,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subscriptionID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "subscriptionPlan",
    },
    date: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("UsersSubscriptions", UsersSubscriptions);