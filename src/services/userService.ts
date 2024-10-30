import axios from "axios";

const API_URL = "http://localhost:8080";

interface User {
  fullName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  image?: string;
}

const UserService = {
  createUser: async (userData: User) => {
    try {
      const response = await axios.post(`${API_URL}/users`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar usuário", error);
      throw error;
    }
  },
};

export default UserService;
