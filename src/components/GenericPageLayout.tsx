import React, { useEffect, useState, useCallback, useMemo } from "react";
import { WeatherResponse } from "@commonTypes/weatherTypes";
import { useGeolocated } from "react-geolocated";
import Header from "@components/Header";
import Footer from "@components/Footer";
import AppContext from "@config/context";
import api, { geocodeApi } from "@config/api";
import Geocode from "react-geocode";

type GenericPageLayoutProps = {
  children: React.ReactNode;
};
function GenericPageLayout(props: GenericPageLayoutProps) {
  const { children } = props;
  const [currentWeather, setCurrentWeather] = useState<WeatherResponse>();
  const value = useMemo(
    () => ({ currentWeather, setCurrentWeather }),
    [currentWeather]
  );
  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  });

  useEffect(() => {
    (async () => {
      if (isGeolocationEnabled && coords) {
        try {
          const response = await api.get(
            `/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=pt_br`
          );
          const location = await Geocode.fromLatLng(
            coords.latitude.toString(),
            coords.longitude.toString()
          );
          console.log(location);
          setCurrentWeather({
            ...response.data,
            formatted_address: location.results[0]
              ? location.results[0].formatted_address
              : ""
          });
        } catch (error) {
          console.log("error while trying to get data");
        }
      }
    })();
  }, [isGeolocationEnabled, coords]);

  return (
    <AppContext.Provider value={value}>
      <div>
        <Header currentWeather={currentWeather} />
        <main>{children}</main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default GenericPageLayout;
