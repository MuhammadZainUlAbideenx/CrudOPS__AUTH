import axios from "axios";

const URL ='http://localhost:8000';
export default adduser = async()=>{

    await axios.post(`${URL}/add`,data)
}