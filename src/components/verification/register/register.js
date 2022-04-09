import React from 'react'
import { useState} from "react";
import { useDispatch} from "react-redux";
import '../register/register.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { register } from '../../Redux/Actions/CustomerAction'
import {useNavigate } from 'react-router-dom';



const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [customer, setcustomer] = useState({
        first_name: "",
        second_name:"",
        last_name:"",
        customer_username:"",
        phone_number:"",
        email:"",
        customer_pasword:""
    })
  
    const onChange= (e) => {
      setcustomer(prev=>({
          ...prev,
          [e.target.name]:e.target.value
      }))
    };
    
    const handleRegister = (e) => {
      e.preventDefault();
        dispatch(register(customer))
        .then(() => {
            console.log(customer);
            console.log("after handle register");
            navigate('/login')
          })
          .catch((err) => {
          })
    }
  return (
    <div className='top'>
        <Header/>
        <div className='mainregister'> 
            <div className='register'>
                <h2>Register</h2>
                <form >
                    <fieldset >
                        <div className='names'>
                            <div>
                                <p>First Name</p>
                                <input name="first_name" type='text' value={customer.first_name} onChange={onChange} />
                            </div>
                            <div>
                                <p>Second Name</p>
                                <input name="second_name" type='text' value={customer.second_name} onChange={onChange}/>
                            </div>   
                            <div>
                                <p>Last Name</p>
                                <input name="last_name"type='text' value={customer.last_name} onChange={onChange}/>
                            </div> 
                        </div>
                        

                        <div className='registeremail'>
                            <div>
                                <p>Username</p>
                                <input name="customer_username" type="text" value={customer.customer_username} onChange={onChange}/>
                            </div>
                            <div>
                                <p>phone_number</p>
                                <input name="phone_number" type="text" value={customer.phone_number} onChange={onChange}/>
                            </div>
                            <div >
                                <p>Contact E-mail</p>
                                <input name="email" type="email" value={customer.email} onChange={onChange}/>
                            </div>
                        </div>
                        
                        <div className='password'>
                            <div>
                                <p>Create a password</p>
                                <input name='customer_pasword' type='password' value={customer.customer_pasword} onChange={onChange} />
                            </div>
                            <div>
                                <p>Retype your password</p>
                                <input type='password'/>
                            </div>
                            
                        </div>
                       
                    </fieldset>
                     <div>
                        <button onClick={handleRegister}> Register</button>
                    </div>
                </form>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Register