import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-falaagro-production.up.railway.app",
});

export default api;
