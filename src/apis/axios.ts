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

function setCookie(name: string, value: string, days: number): void {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/; samesite=lax;`;
}

const token = localStorage.getItem("token");
const userKey = localStorage.getItem("userKey");
if (token && userKey) {
  setCookie("token", token, 30);
  setCookie("userKey", userKey, 30);
}

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers["Authorization"] = getToken();
  }
  return config;
});

instance.interceptors.response.use(
  (res) => {
    console.log(res);
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

//프로필 API
export const profileApi = {
  post: async (formData: FormData): Promise<void> => {
    await instance.post("/profile", formData);
  },
  get: async (): Promise<void> => {
    const response = await instance.get("/profile");
    return response.data;
  },
};

//매물등록 Api
export const estateApi = {
  post: async (formData: FormData): Promise<void> => {
    await instance.post("/estate", formData);
  },
};
