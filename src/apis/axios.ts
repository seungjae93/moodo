import axios, { AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
  withCredentials: true,
});

const getToken = () => {
  const token = localStorage.getItem("token");
  const userKey = localStorage.getItem("userKey");
  const approved = localStorage.getItem("approved");
  return token && userKey && approved
    ? { token: token, userKey: userKey, approved: approved }
    : null;
};

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    const { token: authToken, userKey, approved } = token;
    config.headers["Authorization"] = `Bearer ${authToken}`;
    config.headers["UserKey"] = userKey;
    config.headers["Approved"] = approved;
  }
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

//프로필 API
export const profileApi = {
  post: async (formData: FormData): Promise<void> => {
    await instance.post("/profile", formData);
  },
  get: async (): Promise<void> => {
    const { data } = await instance.get("/profile");
    return data;
  },
};

//매물등록 Api
export const estateApi = {
  post: async (formData: FormData): Promise<void> => {
    await instance.post("/estate", formData);
  },
  getList: async (): Promise<void> => {
    const { data } = await instance.get("/estate/list");
    return data;
  },
  get: async (estateId: string): Promise<void> => {
    const { data } = await instance.get(`/estate/${estateId}`);
    return data;
  },
  delete: async (estateId: string): Promise<void> => {
    const { data } = await instance.delete(`/estate/${estateId}`);
    return data;
  },
  put: async (formData: FormData): Promise<void> => {
    await instance.post("/estate", formData);
  },
};
