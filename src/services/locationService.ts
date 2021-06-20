/**
 * Retrieves the client's geolocation from the browser API.
 *
 * @returns {Geolocation} a geolocation object.
 */
export const getGeolocation = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return navigator.geolocation.getCurrentPosition(
    successGeolocationCallback,
    errorGeolocationCallback,
    options,
  );
};

const successGeolocationCallback = (position: any) => {
  var crd = position.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);

  return crd;
};

const errorGeolocationCallback = (err: any) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};
