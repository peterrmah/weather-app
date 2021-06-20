import React, { FunctionComponent, useEffect, useState } from "react";

const useGetGeolocation = (): [
  string,
  { latitude: number; longitude: number },
  (event: any) => void,
] => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchCityName = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_REVERSE_GEOCODING_BASE_URL}?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`,
        ).then((res) => res.json());
        const city = response?.city ?? "";
        console.log("city:", city);
        setCity(city);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCityName();
  }, [location]);

  /**
   * Retrieves the client's geolocation from the browser API.
   *
   * @returns {Geolocation} a geolocation object.
   */
  const getGeolocation = (event: any) => {
    event.preventDefault();

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      successGeolocationCallback,
      errorGeolocationCallback,
      options,
    );
  };

  /**
   * Saves location to hook state.
   *
   * @param position
   */
  const successGeolocationCallback = (position: any): void => {
    const crd = position.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    setLocation({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  };

  const errorGeolocationCallback = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  return [city, location, getGeolocation];
};

export default useGetGeolocation;
