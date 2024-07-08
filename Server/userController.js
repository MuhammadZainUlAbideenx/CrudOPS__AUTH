import User from "./userSchema.js";
import bcrypt from "bcryptjs";


export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password);
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
      password:hashedPassword,
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
    let userExist = await User.findOne({ email: email });
  
    if (!userExist) {
      return res.status(401).json({ message: "User Not Found" });
    }
  
    let matchPassword = bcrypt.compareSync(password, userExist.password);
  
    if (matchPassword) {
      return res.status(200).json({ message: "Login Successful" });
    } else {
      return res.status(401).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
  
};
