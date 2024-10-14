import { User } from '../Models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const generateToken = (id) => {

    const token = jwt.sign({id}, process.env.JWT_SECRET); 
    return token;
};

const registerController = async (req, res) => {
    try {
       
        const { fullname, phonenumber, email, password } = req.body;

        
        if (!fullname || !phonenumber || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

       
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const user = new User({ fullname, phonenumber, email, password: hashedPassword });
        await user.save();

     
        const token = generateToken(user._id);

        return res.json({ success: true, token });

    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const loginController = async (req, res) => {
 try {
  const {email,password} = req.body;
  if (!email || !password) {
   return res.status(400).json({ success: false, message: 'Email and password are required' });
 }
  const user = await User.findOne({email})
 
  if(!user){
   return res.status(401).json({success:false ,message:"User with this email doesn't exists"})
  }
  const verify =  await bcrypt.compare(password,user.password)
  if (!verify) {
    return res.status(401).json({ success: false, message: 'Invalid password' });
}
const token = generateToken(user._id)
 
return res.status(200).json({success:true,token})


 } catch (error) {
  console.error('Error during login:', error);
  return res.status(500).json({ success: false, message: 'Internal server error' })
 }

};



export { registerController, loginController };