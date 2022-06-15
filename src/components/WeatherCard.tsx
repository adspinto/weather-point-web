import React from "react";
import { WeatherResponse } from "@commonTypes/weatherTypes";

type WeatherCardProps = {
  title?: string;
  weather: WeatherResponse | undefined;
};
function WeatherCard(props: WeatherCardProps) {
  const weather = props.weather;
  const date = new Date();
  return (
    <div className="today-container">
      <div className="today-weather-container">
        <span>TODAY&apos;S WEATHER</span>
        <span>{`${date.getHours()}:${date.getMinutes()}`}</span>
      </div>
      {weather && (
        <div className="weather-container">
          <div>
            {weather.weather[0] && (
              <img
                alt={weather.weather[0].description}
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
            )}
            <div className="weather-desc">
              <div className="today-temp">
                {weather.main.temp.toFixed(0)}° c
              </div>
              {weather.weather[0] && (
                <div>{weather.weather[0].description}</div>
              )}
            </div>
          </div>

          <div className="weather-address">{weather.formatted_address}</div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
