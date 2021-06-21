import { AnyAction } from "redux";

import { LocationState } from "./actionTypes";
import { LOCATION_ACTION_TYPES } from "./actionTypes";
import * as LocationActions from "./actions";

export const initialState: LocationState = {
  city: "Victoria",
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOCATION_ACTION_TYPES.UPDATE_CITY:
      console.log(LOCATION_ACTION_TYPES.UPDATE_CITY);
      return LocationActions.updateCity(state, action);

    case LOCATION_ACTION_TYPES.RESET:
      console.log(LOCATION_ACTION_TYPES.RESET);
      return LocationActions.reset(state, action);

    default:
      console.log("DEFAULT");
      return { ...state };
  }
};

export default reducer;
