import React from 'react'
import '../login/login.css'
import { Link,useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import{ loginAuth} from'../../Redux/Actions/CustomerAction'
import { useDispatch} from "react-redux";
import { useState } from 'react';
import { useSelector } from 'react-redux';



 const Login = () => {

const required = value => {
         if (!value) {
          return (
            <div> This field is required!</div> );
            }
         };

const dispatch=useDispatch();
const navigate = useNavigate();
const {isLoggedIn}=useSelector(state=>state.customerReducer)

const [customer_username, setCustomer_username] = useState('')
const [customer_pasword, setCustomer_pasword] = useState('')

        // const [customer, setCustomer] = useState({
        //     customer_username:"",
        //     customer_pasword:""});
        
    //     const onChange= (e) => {
    //   setCustomer(prev=>({
    //       ...prev,
    //       [e.target.name]:e.target.value
    //   }))
    //          };
       
const handleLogin = (e) => {
             e.preventDefault();
           dispatch(loginAuth(customer_username,customer_pasword))
        
        //    .then(() => {
        //     navigate('/CustomerProfile')
        //   })
        //   .catch((err) => {
        //   })
        if(isLoggedIn){
            return navigate('/CustomerProfile')
        }
             };
    
          
         
  return (
 <div className='MainLogin'>
 <Header/>
 <div className='topContainerLogin'>
    <div className='login'>
        <div>
            <form>
             <h2>Login</h2>
                <fieldset>
                    <label>
                        <p>UserName</p>
                        <input name="customer_username" type='text' value={customer_username} onChange={(e) => setCustomer_username(e.target.value)}/>
                    </label>
                    <label>
                        <p>password</p>
                        <input name="customer_pasword" type='password' value={customer_pasword} onChange={(e) => setCustomer_pasword(e.target.value)} validation={[required]}/>
                    </label>
                    <label>
                        <Link to='/ForgotPassword'><p>Forgot your Password/Username?</p></Link>
                        <Link to='/register'><p>Register now</p></Link>
                    </label>
                   
                </fieldset>
                <button onClick={handleLogin} >Login</button>
          
            </form>
        </div>
        <div className='register'>
            <h2>Register Now</h2>
            <h3> Do you have an account?</h3>
            <p>register to have a new account now. You'll be able to:</p>
            <ul className='list'>
                <li>Create courier and freight shipment </li>
                <li> get estimates and transist times</li>
                <li> Shedule pickups</li>
                <li>Open a purolator Business Account to order supplies, get account-based estimates and more</li>
            </ul>
            <p>Click on the button to register</p>
            <Link to= '/Register'> <button>Register</button></Link>
        </div>

    </div>
    </div>
 <Footer/>
 </div>

  )
 }

export default Login;