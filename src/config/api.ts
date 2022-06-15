import axios from "axios";
import Geocode from "react-geocode";

const createAPI = (url?: string) => {
  const instance = axios.create({
    baseURL: url || `https://api.openweathermap.org/data/2.5`
  });
  return instance;
};

const api = createAPI();
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY || "");
Geocode.setLanguage("pt-BR");
Geocode.setRegion("pt-BR");
export const geocodeApi = createAPI(
  "https://maps.googleapis.com/maps/api/geocode/json"
);

api.interceptors.request.use(
  (config) => {
    config.url = `${config.url}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`;
    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);

geocodeApi.interceptors.request.use(
  (config) => {
    config.url = `${config.url}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);

export default api;
