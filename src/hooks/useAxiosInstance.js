import axios from "axios";

export const useAxiosInstance = () => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_ENTRYPOINT,
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      if (
        (error.response.status === 403 || error.response.status === 401) &&
        !originalRequest._retry &&
        localStorage.getItem("refresh_token") !== null
      ) {
        originalRequest._retry = true;
        await axios.post(
          `${process.env.REACT_APP_API_ENTRYPOINT}/token/refresh`,
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          {
            withCredentials: true,
          }
        );
        return instance(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
