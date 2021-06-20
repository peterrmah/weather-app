import { combineReducers } from "redux";

import weatherReducer from "./weather";

const reducer = combineReducers({
  wtr: weatherReducer,
});

export default reducer;
