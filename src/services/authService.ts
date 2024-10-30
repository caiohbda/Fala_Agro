interface LoginResponse {
  message: string;
  userId: string;
}

const API_URL = "http://localhost:8080";

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
