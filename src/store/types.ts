import { WeatherState } from "./reducers/weather/actionTypes";
import { LocationState } from "./reducers/location/actionTypes";

/**
 * Redux state.
 */
export interface AppState {
  locationReducer: LocationState;
  weatherReducer: WeatherState;
}
