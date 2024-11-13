import axios from "axios";
import { IUser } from "../interfaces/IUser";

const API_URL = "http://localhost:3333";

const UserService = {
  createUser: async (userData: IUser) => {
    console.log("Enviando dados para o servidor:", userData); // Verifique os dados antes de enviar
    try {
      const response = await axios.post(
        `${API_URL}/users`,
        {
          FullName: userData.fullName,
          Username: userData.username,
          Email: userData.email,
          Password: userData.password,
          PhoneNumber: userData.phoneNumber,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao criar usuário", error);
      throw error;
    }
  },
};

export default UserService;
