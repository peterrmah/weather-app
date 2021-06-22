import { AnyAction } from "redux";

import { LocationState } from "./actionTypes";
import { LOCATION_ACTION_TYPES } from "./actionTypes";
import * as LocationActions from "./actions";

const initialState: LocationState = {
  city: "Victoria",
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOCATION_ACTION_TYPES.UPDATE_CITY:
      return LocationActions.updateCity(state, action);

    default:
      return { ...state };
  }
};

export default reducer;
