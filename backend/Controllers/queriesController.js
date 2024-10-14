import { User } from "../Models/userModel.js";



 export const userQuery = async(req,res) =>{
try {
  
    const userId = req.body.userId;
  
    const  queries = req.body.queries;
    
   
   if(queries){
   
    await User.findByIdAndUpdate(userId,{queries:queries})
  
    
    
     return res.json({success:true,message:"Queries send"})
   }
} catch (error) {
return res.json({success:false,message:"Error in sending quries"})
  
}
  


}


export const getAllUserQueries = async (req, res) => {
  try {
    const usersWithQueries = await User.find({ queries: { $exists: true, $ne: ""} })
      .select("email queries")
      .exec();

    
    if (usersWithQueries.length > 0) {
      return res.json({ success: true, users: usersWithQueries });
    } else {
      return res.json({ success: false, message: "No users with queries found" });
    }
  } catch (error) {
    console.error("Error in fetching user queries for admin:", error);
    return res.json({ success: false, message: "Error in fetching user queries" });
  }
};

       
       
      
    
