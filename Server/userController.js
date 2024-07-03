import User from './userSchema.js';
export const addUser = async (req,res,next)=>{
    const {username, email , password}= req.body;
    const user = req.body;
    const newUser= new User (user);
    try {
      const user = new User({
        username,
        email,
        password
      });
       
      await user.save();
    
  } 
    catch (error) {
      console.log(error);
    }
    
}
