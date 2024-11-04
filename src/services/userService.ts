import axios from "axios";
import { IUser } from "../interfaces/IUser";

const API_URL = "http://localhost:8080";

const UserService = {
  createUser: async (userData: IUser) => {
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
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao criar usuário", error);
      throw error;
    }
  },
};

export default UserService;
