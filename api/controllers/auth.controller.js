import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup= async (req, res, next)=>{
    const { username, email, password } = req.body;
    
    if(!username || !email || !password || username==='' || email==='' || password===''){
        next(errorHandler(400, "All field are required"))
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        return res.json('Signup successful');
    } catch (error) {
        // return res.status(500).json({message: "Something went wrong"});
        next(error)
    }
}