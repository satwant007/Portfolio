import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/user/auth'

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);

console.log("jajas")
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});


app.get('/me', async (req,res)=>{
    console.log("i am working")
})


mongoose.connect('mongodb://localhost:27017/Portfolio', { dbName: "Portfolio" });
