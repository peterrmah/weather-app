import { AnyAction } from "redux";

import { LocationState } from "./actionTypes";
import { initialState } from "./index";

/**
 * Updates location state to provided city name.
 *
 * @param state - initial state.
 * @param action - actions props.
 * @returns updated location.
 */
export const updateCity = (state: LocationState, action: AnyAction) => {
  return {
    ...state,
    city: action.newCity,
  };
};

/**
 * Reset store to default values.
 *
 * @param state - initial state.
 * @param action - actions props.
 * @returns default location.
 */
export const reset = (state: LocationState, action: AnyAction) => {
  return initialState;
};
