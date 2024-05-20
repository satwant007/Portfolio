import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userEmail : String,
    currentOtp : String,
    lastLoggedIn : Date,
    newsletterSubscription : Boolean,
    newPhotoUpdateSubscription : Boolean
})


export const User = mongoose.model('User', userSchema);