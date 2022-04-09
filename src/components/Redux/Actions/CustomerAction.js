import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./Types";
  
  import authService from "../../Services/authservices";
  
  export const register = (customer) => (dispatch) => {
    return authService.register( 
      customer.first_name,
      customer.second_name,
      customer.last_name,
      customer.customer_username,
      customer.phone_number,
      customer.email, 
      customer.customer_pasword )
      .then(
      (response) => {
          dispatch({
              type: REGISTER_SUCCESS, })

          dispatch({
              type: SET_MESSAGE,
              payload: response.data.message, })

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
              type: REGISTER_FAIL});

          dispatch({
              type: SET_MESSAGE,
              payload: message })

          return Promise.reject()
      }
    )
  }

  export const loginAuth = ( customer_username,customer_pasword) => (dispatch) => {
    return authService.login( customer_username,customer_pasword)
    .then( (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { customer: data },
        });
        
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    authService.logout();
    dispatch({
      type: LOGOUT,
    });
  };


  
