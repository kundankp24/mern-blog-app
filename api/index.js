import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => console.log('Connected to MongoDB')).catch(err => console.error('Error connecting to MongoDB', err));

const app= express();

const port = 3000;

app.listen(3000, ()=>{
    console.log("Server is running on port 3000 ");
});
