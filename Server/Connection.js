import mongoose from "mongoose";
//import autiIncrement from 'mongoose-id-autoincrement';
const Connection = async () => {
  const options = {
    useNewUrlParser: true, // Use the new URL parser instead of the deprecated one
    useUnifiedTopology: true, // Use the new unified topology layer

  };
  try {
    await mongoose.connect(
      "mongodb+srv://zainulabideen00945:1234567890@crud.smf59yq.mongodb.net/?retryWrites=true&w=majority&appName=crud",
      options
    );
    console.log("DataBase Connected");
  } catch (error) {
    console.log("Error Connecting DataBase", error);
  }
};
export default Connection;
