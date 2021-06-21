import { AnyAction } from "redux";

import { WeatherState, WEATHER_ACTION_TYPES } from "./actionTypes";
import * as WeatherActions from "./actions";

export const initialState: WeatherState = {
  temperature: 0,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case WEATHER_ACTION_TYPES.UPDATE_WEATHER:
      console.log(WEATHER_ACTION_TYPES.UPDATE_WEATHER);
      return WeatherActions.updateWeather(state, action);

    case WEATHER_ACTION_TYPES.RESET:
      console.log(WEATHER_ACTION_TYPES.RESET);
      return WeatherActions.reset(state, action);

    default:
      console.log("DEFAULT");
      return { ...state };
  }
};

export default reducer;
