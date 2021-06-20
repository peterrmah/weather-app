import { AnyAction } from "redux";

import { WeatherState } from "../../types/StateTypes";
import { WEATHER_ACTIONS } from "../weatherActions";

const initialState: WeatherState = {
  city: "Victoria",
  location: {
    latitude: 48.428418,
    longitude: -123.365985,
  },
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case WEATHER_ACTIONS.REFRESH:
      console.log("WEATHER_ACTIONS.REFRESH");
      break;

    case WEATHER_ACTIONS.UPDATE_CITY:
      console.log("WEATHER_ACTIONS.UPDATE_CITY");
      return {
        ...state,
        city: action.newCity,
      };

    case WEATHER_ACTIONS.RESET:
      console.log("WEATHER_ACTIONS.RESET");
      return initialState;

    default:
      console.log("DEFAULT");
      return { ...state };
  }
};

export default reducer;
