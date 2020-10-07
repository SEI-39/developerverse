import axios from "axios";

const instance = axios.create({
  baseURL: "https://developer-verse.herokuapp.com/",
});

export default instance;
