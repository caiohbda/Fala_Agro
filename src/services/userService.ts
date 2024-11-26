import { api } from "../api/api";
import { IUser } from "../interfaces/IUser";

const UserService = {
  createUser: async (userData: IUser) => {
    console.log("Enviando dados para o servidor:", userData);
    try {
      const response = await api.post(
        "/users",
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

  getUser: async () => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter dados do usuário", error);
      throw error;
    }
  },
};

export default UserService;
