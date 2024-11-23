import axios from "axios";

const api = axios.create({
  baseURL: "https://api-falaagro.railway.internal",
});

export default api;
