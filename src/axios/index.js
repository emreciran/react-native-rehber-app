import axios from "axios";
const BASE_URL = "https://971f-212-253-124-232.eu.ngrok.io/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
