import axios from 'axios';

const clientApi = axios.create({
  baseURL: `${process.env.REACT_APP_LOCAL_HOST}`,
});
const clientApi2 = axios.create({
  baseURL: "http://198.244.164.117/",
});

const Interceptor = () => {
  clientApi.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 403 && originalRequest._retry !== true) {
        originalRequest._retry = true;
        localStorage.clear();
      }
      return Promise.reject(error);
    }
  );
};

export { clientApi, Interceptor,clientApi2,  };
