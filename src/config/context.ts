import { WeatherResponse } from "@commonTypes/weatherTypes";
import React from "react";
type AppContextType = {
  currentWeather: WeatherResponse | undefined;
  setCurrentWeather: React.Dispatch<
    React.SetStateAction<WeatherResponse | undefined>
  >;
};
const value: AppContextType = {
  currentWeather: undefined,
  setCurrentWeather: () => ""
};
const AppContext = React.createContext(value);

export default AppContext;
