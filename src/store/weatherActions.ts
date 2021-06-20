/**
 * @enum {string} Supported actions in the weather reducer.
 *
 * @property {string} REFRESH - fetch updated weather results.
 * @property {string} UPDATE_CITY - change city names to fetch weather results for.
 * @property {string} RESET - reset store to default values.
 */
export enum WEATHER_ACTIONS {
  REFRESH = "REFRESH",
  UPDATE_CITY = "UPDATE_CITY",
  RESET = "RESET",
}
