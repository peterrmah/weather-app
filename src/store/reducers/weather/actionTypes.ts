/**
 * @enum {string} Supported actions in the weather reducer.
 *
 * @property {string} UPDATE_WEATHER - updates weather.
 * @property {string} RESET - reset store to default values.
 */
export enum WEATHER_ACTION_TYPES {
  UPDATE_WEATHER = "UPDATE_WEATHER",
  RESET = "RESET",
}

/**
 * Weather state.
 */
export interface WeatherState {
  temperature: number;
}
