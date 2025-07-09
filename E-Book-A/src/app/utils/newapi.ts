import axios from "axios";

const API = axios.create({
  baseURL: "/api/aboutUsCards", // ✅ Ensure this is correct
});

export default API;
