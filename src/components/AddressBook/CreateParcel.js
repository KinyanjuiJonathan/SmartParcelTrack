import React from 'react'
import { useState } from 'react';
import { FaAddressBook } from 'react-icons/fa';
import '../AddressBook/CreateParcel.css'
import Header from '../Header/Header';
import { useDispatch} from "react-redux";
import {createParcel} from '../Redux/Actions/ParcelAction'
import { Link } from 'react-router-dom';



const CreateParcel=()=> {

  const dispatch=useDispatch();

  const [parcel, setParcel] = useState({
    customer_username:"",
    parcel_description:"", 
    startlocation:"",
    endlocation:""
  });

  const [parcels, setParcels] = useState([]); 
  
  const { v4: uuidv4 } = require('uuid');

  const addParcel = (e) => {
    e.preventDefault();
    const { customer_username, parcel_description, startlocation,endlocation } = parcel;   
    const formValid = customer_username&& parcel_description && startlocation && endlocation
        if (!formValid) {
          return; }
        setParcels((parcels) => [...parcels,{id: uuidv4, customer_username:customer_username, parcel_description, startlocation,endlocation } ]);
      };

  const deleteParcel = (index) => {
    setParcels((parcels) => parcels.filter((_, i) => i !== index));
  };

  const handleSubmitParcel=(e)=>  {
    e.preventDefault();
    dispatch(createParcel(parcel))

  //   .then(() => {
  //    navigate('/CustomerProfile')
  //  })
   .catch((err) => {
   })
      };
   

  return (
  <div>
    <Header/>
    <div className="NewAddress">  
      <form onSubmit={addParcel}>
        <h1><FaAddressBook size='80px'/> Enter your Data to update your Address-Book</h1>
        <div className='NewAddress2'>
          {/* <div>
            <label>customer_username<br></br></label>
            <input
               name="customer_username" value={parcel.customer_username} onChange={(e) => setParcel((parcel) => ({ ...parcel, customer_username: e.target.value }))}
            />
          </div> */}
          <div>
            <label>Parcel description<br></br></label>
            <input
               name="parcel_description" value={parcel.parcel_description} onChange={(e) => setParcel((parcel) => ({ ...parcel, parcel_description: e.target.value }))}
            />
          </div>
          <div>
            <label>Start Location<br></br></label>
            <input
               name="startlocation" value={parcel.startlocation} onChange={(e) => setParcel((parcel) => ({ ...parcel, startlocation: e.target.value })) }
            />
          </div>
          <div>
            <label>End Location<br></br></label>
            <input
              name="endlocation" value={parcel.endlocation} onChange={(e) => setParcel((parcel) => ({ ...parcel, endlocation: e.target.value })) }
            />
          </div>
          <div className='buttons'>
          <button type='submit'>Add</button>
          <Link to="/customerprofile"><button>back</button></Link>
          </div>
        </div>
      </form>
    

      {parcels.map((parcel, index) => {
        return (
          <div key={parcel.id}>
            <p><strong>Confirm data before submition</strong></p>
            <p>Parcel_description : {parcel.parcel_description}</p>
            <p> Start location: {parcel.startlocation}</p>
            <p> End location: {parcel.endlocation}</p>
            <button type="button" onClick={() => deleteParcel(index)}> delete </button>
            <p><strong>click on submit to complete placing your order</strong></p>
            <button onClick={handleSubmitParcel}> submit </button>
          </div>
          
        );
      })}

    </div>
  </div>
  )
  }
export default CreateParcel