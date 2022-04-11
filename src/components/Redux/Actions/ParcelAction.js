import {
    PARCEL_CREATE_SUCCESS,
    PARCEL_CREATE_FAIL,
    PARCEL_GET_FAIL,
    PARCEL_GET_SUCCESS,
    SET_MESSAGE,
  }from "./Types";
  
  import parcelServices from "../../Services/parcelService";
  
  
  
  export const createParcel = ( parcel) => (dispatch) => {
    console.log({parcel});
    return parcelServices.createParcel( parcel.customer_username, parcel.parcel_description, parcel.startlocation,parcel.endlocation).then(
      (response) => {
          dispatch({
              type: PARCEL_CREATE_SUCCESS,
          })
          dispatch({
              type: SET_MESSAGE,
              payload: response.data.message,
          })
          return Promise.resolve()
      },
      (error) => {
          const message = 
              (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString()
          dispatch({
              type: PARCEL_CREATE_FAIL,
          });
          dispatch({
              type: SET_MESSAGE,
              payload: message,
          })
          return Promise.reject()
      }
    )
  }
  
  export const getParcel = (parcel_id) => (dispatch) => {
    return parcelServices.getparcel(parcel_id).then(
      (data) => {
          dispatch({
              type:PARCEL_GET_SUCCESS,
                payload: { parcel: data },
          });
          return Promise.resolve();
      },
      (error) => {
          const message = 
              (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString()
          dispatch({
              type: PARCEL_GET_FAIL,
          });
          dispatch({
              type: SET_MESSAGE,
              payload: message,
          })
          return Promise.reject()
      }
    )
  }
  export const get_Parcels = (customer_username) => (dispatch) => {
    return parcelServices.get_Parcels(customer_username).then(
      (data) => {
          dispatch({
              type:PARCEL_GET_SUCCESS,
                payload: { parcel: data },
          });
          return Promise.resolve();
      },
      (error) => {
          const message = 
              (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString()
          dispatch({
              type: PARCEL_GET_FAIL,
          });
          dispatch({
              type: SET_MESSAGE,
              payload: message,
          })
          return Promise.reject()
      }
    )
  }