import axios from "axios";

const URL = "http://localhost:8000";
export const signup = async (data) => {
  await axios.post(`${URL}/signUp`, data);
};

export const login = async (data) => {
  await axios.post(`${URL}/login`, data);
};