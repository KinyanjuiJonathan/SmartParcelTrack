import axios from 'axios'


const API_URL = "http://localhost:5000/parcels/"


const createParcel = ( 
    customer_username, parcel_description, startlocation,endlocation) => {
        

    return axios.post(API_URL, {
        customer_username, parcel_description, startlocation,endlocation
    })
}

const get_Parcels = (customer_username) => {

    return axios
    .get(API_URL  ,{
        customer_username
    })
    .then((response)=>{
        localStorage.setItem("parcel",JSON.stringify(response.data));
    })
    
}

export default {
    createParcel,
    get_Parcels
}