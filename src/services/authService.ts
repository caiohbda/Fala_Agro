import axios from "axios";
import { LoginResponse } from "../interfaces/ILoginResponse";

const API_URL = "http://localhost:3333"; // URL da sua API

const authService = {
  login: async (
    identifier: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { identifier, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Armazena o token no localStorage após o login
      localStorage.setItem("authToken", response.data.token);

      return response.data; // Retorna a resposta com o token
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },

  getCurrentUser: async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("Token not found");
    }

    try {
      const response = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao obter usuário:", error);
      throw error;
    }
  },
};

export default authService;
