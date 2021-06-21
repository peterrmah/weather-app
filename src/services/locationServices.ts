/**
 * Fetches the client's current location city name.
 *
 * @returns the closest matching city name.
 */
export const fetchCityName = async () => {
  try {
    const response = await fetch("http://www.geoplugin.net/json.gp").then((res) => res.json());
    const city = (response?.geoplugin_city as string) ?? "";
    return city;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
