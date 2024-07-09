// ------------------------- Setting up the server ---------------------------

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import nurseryRoute from './Routes/nursery.js'
import reviewRoute from './Routes/review.js'

const app = express();

dotenv.config();
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get('/',(req,res)=>{
    res.send("Api is working");
})

// database
mongoose.set('strictQuery',false)
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        console.log('DB connected')
    }
    catch(err){
        console.log('DB not connected');
    }
}

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/nurserys',nurseryRoute);
app.use('/api/v1/reviews',reviewRoute)


app.listen(port,() =>{
    connectDB();
    console.log("Server is running on port " + port);
})