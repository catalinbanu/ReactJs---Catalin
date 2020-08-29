import addReducer from "./addReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  addReducer: addReducer,
});

export default allReducers;
