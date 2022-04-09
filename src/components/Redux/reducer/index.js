import { combineReducers } from "redux";
import parcelReducer from "./ParcelReducer";
import customerReducer from "./CustomerReducer"
import message from "./message";

export default combineReducers({
  parcelReducer,
 customerReducer ,
  message,
});
