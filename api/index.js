import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => console.log('Connected to MongoDB')).catch(err => console.error('Error connecting to MongoDB', err));

const app= express();

//build in middleware
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Server is running on port 3000 ");
});

//routes file
app.use('/api/user', userRoutes);
