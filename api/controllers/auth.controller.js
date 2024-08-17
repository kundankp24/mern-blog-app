import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === '' ||
      email === '' ||
      password === ''
    ) {
      next(errorHandler(400, 'All fields are required'));
    }
    
    const hashedPassword = await bcryptjs.hash(password, 10);
  
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
  
    try {
      await newUser.save();
      return res.json('Signup successful');
    } catch (error) {
      next(error);
    }
};

export const signin= async (req, res, next)=>{
  const {email, password}= req.body;

  if(!email || !password || email==='' || password===''){
    next(errorHandler(400, 'All fields are required'))
  }

  try {
    const validUser= await User.findOne({email});

    if(!validUser){
      return next(errorHandler(404, 'User not found'));
    }
    const isValidPassword= await bcryptjs.compare(password, validUser.password);

    if(!isValidPassword){
      return next(errorHandler(400, 'Invalid password'))
    }

    const token= await jwt.sign({id: validUser._id},process.env.JWT_SECRET);

    const {password: pass, ...rest}= validUser._doc;

    res.status(200).cookie('access-token', token, {httpOnly: true}).json(rest);
  } catch (error) {
    next(error);
  }
}