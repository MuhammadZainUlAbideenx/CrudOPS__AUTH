import User from './userSchema.js';
export const addUser = async (req,res,next)=>{
    const {name, email , password}= req.body;
    const user = req.body;
    const newUser= new User (user);
    try {
        let existingUser;
        existingUser = await User.findOne({email:email});
       
       res.status(201).json(newUser)
       if (existingUser){
        return res.status().json({message:'User Already Exist'})
        
    }
  } 
    catch (error) {
      console.log(error);
    }
    
}
