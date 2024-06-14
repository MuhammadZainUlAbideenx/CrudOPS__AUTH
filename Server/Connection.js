import mongoose from "mongoose";


const Connection =async()=>{

    try{

    await mongoose.connect("mongodb+srv://zainulabideen00945:1234567890@crud.smf59yq.mongodb.net/?retryWrites=true&w=majority&appName=crud")
    console.log("DataBase Connected")
}
catch(error){

    console.log("Error Connecting DataBase",error)
}
}
export default Connection;