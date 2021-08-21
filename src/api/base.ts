import axios, { AxiosRequestConfig } from "axios";
import { CANCEL } from "redux-saga";
import { meErrorAction } from "../actions/auth";
import { store } from "../Store";

export const BASE_URL = "https://api-dev.domecompass.com";

export const LS_AUTH_TOKEN = "auth_token";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  if (!token) {
    return config;
  }

  return { ...config, headers: { ...config.headers, Authorization: token }};
});

axios.interceptors.response.use(undefined, (error) => {

  console.log(error);
  if (error.response?.data?.code === 9101) {
    console.log("Error in Token");
    localStorage.removeItem(LS_AUTH_TOKEN);
    window.location.href = "/login";
  }
  if(error.response?.data?.code === 8102 ) {
    console.log("Page Not Found")
    window.location.href = "/error";
  }
  if(error.message === "Network Error") {
    console.log("Network Error")
    store.dispatch(meErrorAction("Network Error"))
  }
  if(error.response?.data?.code === 201) {
    const error = "User Not Found!"
    console.log(error) 
    store.dispatch(meErrorAction(error))
  }
  return Promise.reject(error);
});

export const get =<T>(url : string, config? : AxiosRequestConfig) => {
  const source = axios.CancelToken.source();
  const response = axios.get<T>(url , { ...config, cancelToken : source.token});
  response[CANCEL] = source.cancel;
  return response;
}