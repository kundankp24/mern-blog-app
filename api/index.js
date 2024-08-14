import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

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
app.use('/api/auth', authRoutes);

//use of error middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message
    });
});
