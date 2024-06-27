import mongoose from "mongoose";
//import autiIncrement from 'mongoose-id-autoincrement';

const userSchema = new mongoose.Schema(


    {
        unique_id: Number,
        name:String,
        email:String,
        password:String
})

//userSchema.plugin(autiIncrement.plugin,  {model: 'user', field: 'unique_id', unique: false});
const user = mongoose.model('user' ,userSchema);

export default user;