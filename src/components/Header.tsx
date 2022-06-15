/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import React, { useEffect, useState, useCallback, useRef } from "react";

import api from "@config/api";
import Search from "@components/Search";
import { WeatherResponse } from "@commonTypes/weatherTypes";
import { useMediaQuery } from "react-responsive";
import SubNav from "@components/Subnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  title?: string;
  currentWeather: WeatherResponse | undefined;
};

function Header(props: HeaderProps) {
  const title = props.title || "Weather Point";
  const { currentWeather } = props;
  const [searchResult, setSearchResult] = useState<WeatherResponse[]>([]);
  const [search, setSearch] = useState<string>("");
  const [showSubNav, setShowSubNav] = useState<boolean>(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)"
  });

  const searchQuery = async () => {
    try {
      if (search.length > 3) {
        const searchRes = await api.get(
          `/weather?q=${search}&units=metric&lang=pt_br`
        );
        setSearchResult([searchRes.data]);
      }
    } catch (error) {
      console.log("error while catching", error);
    }
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickClose = () => {
    setSearch("");
    setSearchResult([]);
  };

  return (
    <>
      <div
        className={`header-container ${
          isDesktopOrLaptop ? "flex-row" : ""
        } full-width justify-between align-center`}
      >
        <div className="flex-row justify-center align-center left-header-container">
          {isDesktopOrLaptop ? (
            <img
              className="logo-img"
              alt="logo"
              src="https://raw.githubusercontent.com/knivesq/weather-point/master/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setShowSubNav(!showSubNav)}
              className="bars-icon"
              icon={faBars}
            />
          )}
          <div>{title}</div>
          {currentWeather && (
            <div className="flex-row current-weather-container">
              <div>{currentWeather.name}</div>
              <div>{currentWeather.main.temp.toFixed(0)}° c</div>
              {currentWeather.weather[0] && (
                <img
                  alt={currentWeather.weather[0].description}
                  src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                />
              )}
            </div>
          )}
        </div>
        <Search
          search={search}
          onClickClose={onClickClose}
          onChangeSearch={onChangeSearch}
          onFocus={searchQuery}
          onSearch={searchQuery}
          searchResult={
            currentWeather
              ? [{ ...currentWeather, current: true }, ...searchResult]
              : [...searchResult]
          }
        />
      </div>
      <SubNav
        showSubNav={showSubNav}
        setShowSubNav={() => setShowSubNav(!showSubNav)}
        isDesktopOrLaptop={isDesktopOrLaptop}
      />
    </>
  );
}

export default Header;
