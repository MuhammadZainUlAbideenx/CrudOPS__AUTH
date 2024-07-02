import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    unique: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    password: String,
    // required: true,
  },
});

const user = mongoose.model("User", userSchema);

export default user;
