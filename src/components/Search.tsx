import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMagnifyingGlass,
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons";
import { WeatherResponse } from "@commonTypes/weatherTypes";

type SearchProps = {
  search: string;
  onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClose: () => void;
  onFocus?: () => void;
  onSearch?: () => void;
  searchResult: WeatherResponse[];
};
function Search(props: SearchProps) {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const {
    search,
    onChangeSearch,
    onClickClose,
    searchResult,
    onFocus = () => "",
    onSearch = () => ""
  } = props;

  return (
    <>
      <div className="flex-row align-center right-header-container">
        <input
          ref={inputRef}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              onSearch();
            }
          }}
          onFocus={() => {
            setFocused(true);
            onFocus();
          }}
          onBlur={() => setFocused(false)}
          value={search}
          onChange={onChangeSearch}
          placeholder={`Search`}
        ></input>
        <FontAwesomeIcon
          className="close-icon"
          icon={faXmark}
          onClick={onClickClose}
        />
        <FontAwesomeIcon
          onClick={onSearch}
          className="search-icon"
          icon={faMagnifyingGlass}
        />
      </div>
      {searchResult && focused && searchResult.length > 0 && (
        <div className="search-result">
          <ul>
            {searchResult.map((weather) => {
              return (
                <li key={weather.name}>
                  <div>
                    {weather.current && (
                      <div>
                        <FontAwesomeIcon size="lg" icon={faLocationArrow} />
                        <span className="search-current">Current</span>
                      </div>
                    )}
                    <div
                      className={`search-weather-name ${
                        weather.current ? "" : "bold"
                      }`}
                    >
                      {weather.name}
                    </div>
                  </div>
                  <div className="weather-temp-container">
                    {weather.weather[0] && (
                      <img
                        alt={weather.weather[0].description}
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      />
                    )}
                    <span>{weather.main.temp.toFixed(0)}°</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Search;
