import axios, { AxiosError, AxiosInstance } from "axios";

interface CustomAxiosInstance extends AxiosInstance {
   isCancel: (error: AxiosError) => boolean;
}

const api = axios.create({
   baseURL: "http://localhost:3000/",
}) as CustomAxiosInstance;

let cancelToken = axios.CancelToken.source();

api.interceptors.request.use(
   (config) => {
      cancelToken.cancel("Operation canceled due to new request.");

      cancelToken = axios.CancelToken.source();
      config.cancelToken = cancelToken.token;

      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

api.isCancel = (error: AxiosError) => {
   return axios.isCancel(error);
};

export default api;
