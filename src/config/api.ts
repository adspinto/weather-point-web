import axios from "axios";

const createAPI = (url?: string) => {
  const instance = axios.create({
    baseURL: url || `https://api.openweathermap.org/data/2.5`
  });
  return instance;
};

const api = createAPI();

api.interceptors.request.use(
  (config) => {
    config.url = `${config.url}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`;
    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);
export default api;
