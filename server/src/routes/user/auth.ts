import jwt from "jsonwebtoken";
import express from "express";
import {emailSignup} from "../../../../common/src/inputValidations"
import {getRandomOtp, sendUserOTPEmail} from "../../../../common/src/otpVerification"
import {User} from "../../db/mongoDb"

const router = express.Router();

router.get('/me', async (req,res)=>{
    console.log("i am working")
})

router.post('/signup', async (req, res)=>{
    const parsedInput = emailSignup.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(411).json({
            msg : "invalid user input",
            validationError : parsedInput.error
        });
    }
    const userEmail = parsedInput.data.userEmail;
    const currentOtp = getRandomOtp();

    // add an entry of username otp in Mongo DB
    const newUser = new User({userEmail, currentOtp})
    // await newUser.save();
    sendUserOTPEmail(userEmail, currentOtp);
    res.json({ 
        message: 'User created successfully ', 
        userEmail,
        currentOtp 
    });
});

export default router