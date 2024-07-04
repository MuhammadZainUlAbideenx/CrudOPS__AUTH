import User from "./userSchema.js";
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    let checkExistingUser;
    checkExistingUser = await User.findOne({ email: email });
    if (checkExistingUser) {
      res.status(400).json({ message: "User Already Exist" });
    }
  } catch (err) {
    console.log(err);
  }
  try {
    const user = new User({
      username,
      email,
      password,
    });

    await user.save();
    return res.status(201).json({ message: user });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req,res,next) => {
  const {email,password} =req.body;
  try {
    let userExist= await User.findOne({email:email , password : password})
    if (userExist){
      return res.status(200).json({message:"Login Successfull"})
    } 
    return res.status(401).json({message:"User Not Found"})
  } catch (error) {
    console.log(error)
  }
  
};
