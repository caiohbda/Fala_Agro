import api from "../api/api";
import { NoticiasResponse } from "../interfaces/INoticiaAPI";
import { CreateNoticiaBody } from "../interfaces/INoticiaAPI";

export const newsService = {
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
