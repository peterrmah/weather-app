import { AnyAction } from "redux";

import { LocationState } from "./actionTypes";

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
