import api from "../api/api";
import { LoginResponse } from "../interfaces/ILoginResponse";

const authService = {
  login: async (
    identifier: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const response = await api.post(
        "/login",
        { identifier, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("authToken", response.data.token);

      return response.data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },

  getCurrentUser: async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("Token não encontrado");
    }

    try {
      const response = await api.get("/me", {
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
