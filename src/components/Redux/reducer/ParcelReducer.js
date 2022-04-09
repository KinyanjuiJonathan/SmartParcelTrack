import {
    PARCEL_CREATE_SUCCESS,
    PARCEL_CREATE_FAIL,
    PARCEL_GET_SUCCESS
  } from "../Actions/Types";

  const initialState={
    parcel:[]
  }
    
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case PARCEL_CREATE_SUCCESS:
        return {
          ...state,
        };
      case PARCEL_CREATE_FAIL:
        return {
          ...state,
        };
      case PARCEL_GET_SUCCESS:
        return {
          ...state,
          parcel: payload.parcel,
        };
      default:
        return state;
    }
  }