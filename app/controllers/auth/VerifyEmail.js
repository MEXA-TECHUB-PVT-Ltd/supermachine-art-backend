// const User = require("../../models/Admin");
// const bcrypt = require("bcryptjs");
const emailOTPBody = require("../../utils/emailOTPBody")
const db = require("../../models");
const User = db.user;

require('dotenv').config();
const nodemailer = require('nodemailer');
// const userOTPVerificationModel = require("../../models/userOTPVerificationModel")
const userOTPVerificationModel = db.userOTPVerificationModel;


const transporter = nodemailer.createTransport({
    service: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendOTPVerificationEmail = async ( id, email , res) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`
        const result = await userOTPVerificationModel.findOne({
            where: { email: email },
        })
        // console.log("RESULT : "+result);
        if (!result) {
            const newOTPVerif = {
                userId: id,
                otp: otp,
                email: email,
                status: 'pending'
            };
            // console.log(newOTPVerif);
            userOTPVerificationModel.create(newOTPVerif).then(result => {
                // res.json({
                //     message: "new otp saved",
                //     status: true,
                //     result: result
                // });
            })
        } else {
            // const otp = `${Math.floor(1000 + Math.random() * 9000)}`
            const newOTPVerifs = {
                userId: id,
                otp: otp,
                email: email,
                status: 'pending'
            };
            console.log(newOTPVerifs);
            await userOTPVerificationModel.update(newOTPVerifs,
                { where: { email: email } }
            ).then((result) => {
                // if (result == 1) {
                //     res.json({
                //         message: "New OTP Generted Successfully",
                //         status: true,
                //         result,
                //     });
                // } else {
                //     res.json({
                //         message: "OTP Not Exists!",
                //         status: false,
                //         result,
                //     });
                // }

            });
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
                userId: id,
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
        const user = await User.findOne({
            where: { email: email },
        });
        if (user == 0) {
            res.json({
                message: `Not Found any OTP`,
                success: "false",
            })
        } else {
            console.log(user);
            console.log(user.id);
            console.log(user.email);
            sendOTPVerificationEmail(user.id,user.email, res)
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
