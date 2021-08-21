import axios from "axios";
import { User } from "../modals/User";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";

interface LoginRequest {
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

export const Login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";

  return axios.post<LoginResponse>(url, data).then(response => {
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token) 
    window.location.href = "/dashboard"
  }
  )
};

export const Logout = () => {
  localStorage.removeItem(LS_AUTH_TOKEN);
};

interface MeResponse {
  data: User;
}

export const me = () => {
  const url = BASE_URL + "/me";
  return axios.get<MeResponse>(url)
};

export const updateMe = (data : any) => {
  const url = BASE_URL + "/me";
  return axios.put(url,{...data}).then((response) => {
    console.log("This is the response " + response);
    return response.data.data;
  });
  
}
