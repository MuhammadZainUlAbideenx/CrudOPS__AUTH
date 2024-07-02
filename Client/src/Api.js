import axios from "axios";

const URL ='http://localhost:8000';
export const adduser = async(data)=>{

    await axios.post(`${URL}/adduser`,data)
}