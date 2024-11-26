import api from "../api/api"; // Importa a instância do axios configurada
import { NoticiasResponse } from "../interfaces/INoticiaAPI";

// Função para buscar as notícias usando a instância do axios configurada
export const fetchNoticias = async (): Promise<NoticiasResponse> => {
  try {
    const response = await api.get<NoticiasResponse>("/noticias");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    throw new Error("Erro ao buscar notícias.");
  }
};

const newsService = {
  getNoticias: async (): Promise<NoticiasResponse> => {
    try {
      const response = await api.get<NoticiasResponse>("/noticias");
      return response.data; // Retorna as notícias
    } catch (error) {
      console.error("Erro ao obter notícias:", error);
      throw error;
    }
  },
};

export default newsService;
