import {z} from "zod";

const emailSignup = z.object({
    userEmail : z.string().email().min(10).max(125)
});

type signupType = z.infer<typeof emailSignup>;
export { 
    emailSignup
};