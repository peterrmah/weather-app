/**
 * @enum {string} Supported actions in the weather reducer.
 *
 * @property {string} UPDATE_WEATHER - updates weather.
 */
export enum WEATHER_ACTION_TYPES {
  UPDATE_WEATHER = "UPDATE_WEATHER",
}

/**
 * Weather state.
 */
export interface WeatherState {
  temperature: string;
}
