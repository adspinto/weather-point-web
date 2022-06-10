import axios from "axios";

const createAPI = (url?: string) => {
    const instance = axios.create({
       baseURL: url || `https://api.openweathermap.org/data/3.0/onecall?appid=${process.env.OPEN_WEATHER_API}`
    })
    return instance;
}

const api = createAPI();

export default api;