import React, { useEffect } from "react";
import { useGeolocated } from "react-geolocated";

type HeaderProps = {
  title?: string;
};
function Header(props: HeaderProps) {
  const title = props.title || "Weather-point";
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    });

  // useEffect(() => {
  //   const navigator = Navigator.geolocation.getCurrentPosition();
  // }, []);
  return (
    <div>
      <div>
        <div>logo</div>
        <div>{title}</div>
        <div>{isGeolocationAvailable.toString()}</div>
      </div>
    </div>
  );
}

export default Header;
