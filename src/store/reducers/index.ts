import { combineReducers } from "redux";

import locationReducer from "./location";
import weatherReducer from "./weather";

const reducer = combineReducers({
  locationReducer,
  weatherReducer,
});

export default reducer;
