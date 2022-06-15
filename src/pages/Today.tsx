import React from "react";
import GenericPageLayout from "@components/GenericPageLayout";
import WeatherCard from "@components/WeatherCard";
import AppContext from "@config/context";

function Today() {
  return (
    <GenericPageLayout>
      <AppContext.Consumer>
        {(context) => <WeatherCard weather={context?.currentWeather} />}
      </AppContext.Consumer>
    </GenericPageLayout>
  );
}

export default Today;
