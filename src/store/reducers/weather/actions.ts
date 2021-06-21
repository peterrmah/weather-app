import { AnyAction } from "redux";

import { WeatherState } from "./actionTypes";
import { initialState } from "./index";

/**
 * Updates weather state.
 *
 * @param state - initial state.
 * @param action - actions props.
 * @returns updated weather.
 */
export const updateWeather = (state: WeatherState, action: AnyAction) => {
  return {
    ...state,
    temperature: action.actualTemperature,
  };
};

/**
 * Reset store to default values.
 *
 * @param state - initial state.
 * @param action - actions props.
 * @returns default weather values.
 */
export const reset = (state: WeatherState, action: AnyAction) => {
  return initialState;
};
