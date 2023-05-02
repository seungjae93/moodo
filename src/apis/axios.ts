import axios, { AxiosResponse } from "axios";
import { Params } from "react-router-dom";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
  withCredentials: true,
});

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};

instance.interceptors.request.use((config) => {
  config.headers["Authorization"] = getToken();
  return config;
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const unauthorization = error.response.data.error;
    if (unauthorization?.indexOf("로그인") >= 0) {
      localStorage.removeItem("token");
      alert("로그인 후 이용가능합니다.");
      return window.location.replace("/");
    } else return Promise.reject(error);
  }
);

//로그인 API

export const loginApi = {
  login: async (formData: FormData): Promise<AxiosResponse> => {
    return await instance.post("/login", formData); // 수정된 부분
  },

  create: async (formData: FormData): Promise<void> => {
    await instance.post("/signup", formData);
  },
};

export const uploadApi = {
  list: async (formData: FormData): Promise<void> => {
    await instance.post("/estate", formData);
  },
  profile: async (formData: FormData): Promise<void> => {
    await instance.post("/profile", formData);
  },
  getProfile: async (userId: Params): Promise<void> => {
    const response = await instance.get("/profile", userId);
    return response.data;
  },
};
