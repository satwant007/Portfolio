function getRandomOtp() : string {
    return Math.floor(Math.random() * 9000 + 1000).toString();
}

/**
 * ToDo : Send OTP over email.
 * @param userEmail 
 * @param currentOtp 
 */
function sendUserOTPEmail(userEmail : String, currentOtp : String){
    console.log("Email : ", userEmail);
    console.log("OTP : ",currentOtp);
}

export {
    getRandomOtp,
    sendUserOTPEmail
}