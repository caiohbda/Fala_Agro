import api from "../api/api"; // Importando a instância configurada do axios
import { NoticiasResponse } from "../interfaces/INoticiaAPI";
import { CreateNoticiaBody } from "../interfaces/INoticiaAPI"; // Importando a interface para o corpo da notícia

export const newsService = {
  // Função para obter todas as notícias
  getNoticias: async (): Promise<NoticiasResponse> => {
    try {
      const response = await api.get<NoticiasResponse>("/noticias");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter notícias:", error);
      throw error;
    }
  },

  // Função para criar uma nova notícia
  createNoticia: async (
    noticiaData: CreateNoticiaBody
  ): Promise<NoticiasResponse> => {
    try {
      const response = await api.post<NoticiasResponse>(
        "/noticias",
        noticiaData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao criar notícia:", error);
      throw error;
    }
  },
};
