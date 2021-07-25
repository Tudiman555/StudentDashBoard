import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };

  token: string;
  user: User;
}

interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: "staff" | "admin";
}

const BASE_URL = "https://api-dev.domecompass.com/";

export const login = (data: LoginData) => {
  const url = BASE_URL + "/login";

  return axios.post<LoginResponse>(url, data).then((response) => {
      localStorage.setItem("login_token",response.data.token);
    });
};
