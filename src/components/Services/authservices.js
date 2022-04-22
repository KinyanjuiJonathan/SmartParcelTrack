import axios from "axios";
const API_URL = "http://localhost:5000/customers/"


const register = (first_name,second_name,last_name,customer_username,phone_number,email,customer_pasword) => {
  console.log(first_name, 
    second_name,
    last_name,
    customer_username,
    phone_number,
    email,
    customer_pasword
    );

  return axios.post(API_URL + "signup", {
    first_name, 
    second_name,
    last_name,
    customer_username,
    phone_number,
    email,
    customer_pasword})
};

const login = ( customer_username, customer_pasword) => {
  
  return axios
    .post(API_URL + "login", {
      customer_username,customer_pasword
    }) 
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("customer", JSON.stringify(response.data));
      }
      
      console.log({response})
      console.log('this is the response from authservice')
      return response.data;
      
    });
};
const logout = () => {
  localStorage.removeItem("customer");
};

export default {
  register,
  login,
  logout,
}