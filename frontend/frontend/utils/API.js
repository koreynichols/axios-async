import axios from "axios";
import App from "../src/App";

export default axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json"
});
