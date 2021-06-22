import { AnyAction } from "redux";

import { WeatherState, WEATHER_ACTION_TYPES } from "./actionTypes";
import * as WeatherActions from "./actions";

const initialState: WeatherState = {
  temperature: "0",
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case WEATHER_ACTION_TYPES.UPDATE_WEATHER:
      return WeatherActions.updateWeather(state, action);

    default:
      return { ...state };
  }
};

export default reducer;
