import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../Actions/Types";
  
  const customer = JSON.parse(localStorage.getItem("customer"));
  
  const initialState = customer
    ? { isLoggedIn: true, customer}
    : { isLoggedIn: false, customer: null };

  export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          customer: payload.customer,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          customer: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          customer: null,
        };
      default:
        return state;
    }
  }



 