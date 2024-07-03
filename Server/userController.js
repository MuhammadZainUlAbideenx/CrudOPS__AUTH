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
    res.status(201).json({ message: user });
  } catch (error) {
    console.log(error);
  }
};
export const login = () => {};
