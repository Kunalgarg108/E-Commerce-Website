import usermodel from '../models/usermodel.js';
import validator from 'validator';  // npm install validator
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await usermodel.findOne({
            email
        })
        if(!user){
            return res.json({success:false, msg:"User does not Exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success:false, msg:"Invalid credentials"});
        }
        const token = createUserToken(user._id);
        res.json({success:true, msg:"User logged in successfully", token});
    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:"Internal server error"});
    }
};
const createUserToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};
const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const userExists = await usermodel.findOne({ email });
        if(userExists){
            return res.json({success:false, msg:"User already exists"});
        }
        if(!validator.isEmail(email)){
            return res.json({success:false, msg:"Invalid email"});
        }
        if(password.length < 8){
            return res.json({success:false, msg:"Enter strong password"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedpassword =await bcrypt.hash(password,salt);
        const newuser = new usermodel({
            name,
            email,
            password:hashedpassword
        });
        const user=await newuser.save();
        const token = createUserToken(user._id);
        res.json({success:true, msg:"User registered successfully", token});
    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:"Internal server error"});
    }

};
const updateUserProfile = async (req, res) => {
    try{
        const user = await usermodel.findById(req.user._id);
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if(req.body.password){
                user.password = req.body.password;
            }
            const updatedUser = await user.save();
            const token = createUserToken(updatedUser._id);
            res.json({success:true, msg:"User updated successfully", token});
        }
    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:"Internal server error"});
    }
};

const adminLogin = async (req, res) => {
};
export { loginUser, registerUser,adminLogin,updateUserProfile };