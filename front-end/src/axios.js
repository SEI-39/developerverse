import axios from "axios";

const environment = process.env.NODE_ENV;
let instance = null;

if (environment == "development") {
  instance = axios.create({
    baseURL: "http://localhost:5432/",
  });
} else {
  instance = axios.create({
    baseURL: "https://developer-verse.herokuapp.com/",
  });
}

export default instance;
