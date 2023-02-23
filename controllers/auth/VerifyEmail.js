const User = require("../../models/User");
// const bcrypt = require("bcryptjs");
const emailOTPBody = require("../../utils/emailOTPBody")

require('dotenv').config();
const nodemailer = require('nodemailer');
const userOTPVerificationModel = require("../../models/userOTPVerificationModel")


const transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendOTPVerificationEmail = async ({ _id, email }, res) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`
        const result = await userOTPVerificationModel.findOne({ email: email })
        console.log(result)

        if (!result) {
            const newOTPVerif = new userOTPVerificationModel({
                userId: _id,
                otp: otp,
                email: email,
                status:'pending'
            })
            newOTPVerif.save(function (err) {
                if (!err) {
                    console.log("new otp saved");
                } else {
                    console.log(err)
                }
            });
        }
        else {
            userOTPVerificationModel.findOneAndUpdate({ email: email, userId: _id },
                {
                    otp: otp
                },
                {
                    new: true
                },
                function (err, result) {
                    if (result) {
                        console.log("otp saved , updated previous record")
                    } else if (err) {
                        console.log(err)
                    }
                }
            )
        }



        transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Verify Account',
            html: emailOTPBody(otp, "Super Machine  ", "#233973")

        });
        res.json({
            message: `Sent a verification email to ${email}`,
            status: "pending",
            success: "true",
            data: {
                userId: _id,
                otp: otp,
                email: email
            }
        });

    }
    catch (err) {
        console.log("ERROR!")
    }

}

const VerifyEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.json("No users found");
        } else {
            // console.log(`user  :  ${user}`);
            sendOTPVerificationEmail(user, res)
        }

    }
    catch (err) {
        res.json({
            message: "Error occurred while updating passwords",
            error: err.message
        })
    }



};


module.exports = VerifyEmail;
