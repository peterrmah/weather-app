import { AnyAction } from "redux";

import { WeatherState } from "./actionTypes";

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
