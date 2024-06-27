import mongoose from "mongoose";
//import autiIncrement from 'mongoose-id-autoincrement';
const Connection =async()=>{

    try{

    //const db = await mongoose.connect("mongodb+srv://zainulabideen00945:1234567890@crud.smf59yq.mongodb.net/?retryWrites=true&w=majority&appName=crud")
    await mongoose.connect("mongodb+srv://zainulabideen00945:1234567890@crud.smf59yq.mongodb.net/?retryWrites=true&w=majority&appName=crud")
    //autiIncrement.initialize(db);
    console.log("DataBase Connected")
}
catch(error){

    console.log("Error Connecting DataBase",error)
}
}
export default Connection;