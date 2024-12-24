import axios from "axios";

export const productUrl = axios.create({
  baseURL: "http://localhost:5000/api/",
});
