
import jwt from 'jsonwebtoken'

const authMiddleWare = async (req,res,next)=>{
  const {token} = req.headers;
  console.log(token)
  if(!token){
    return res.json({success:false, message: "Error in token"})
  }
  try {
    const token_decode = jwt.verify(token,process.env.JWT_SECRET)
    console.log(token_decode)
    console.log("id:",token_decode.id)
    req.body.userId = token_decode.id;
    next();
    
  } catch (error) {
    console.log(error);
    return res.json({success:false, message: "Error in token"})
    
  }
}



export default authMiddleWare;