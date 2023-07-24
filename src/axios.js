import axios from "axios";

const instanse = axios.create({
  baseURL: "https://movie-sensei-back.onrender.com/",
  // baseURL: "http://localhost:8000/",
});

instanse.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});
export default instanse;
