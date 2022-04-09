import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import '../ForgotPassord/ForgotPassword.css'

function ForgotPassword() {
  return (
      <div>
          <Header/>
        <div className='topForgotpassword'>    
            <div className='forgotpassword'>
                <form>
                <h2>Forgot your password?</h2>
                    <fieldset>
                        <label>
                            <p>Enter your email or your username</p>
                            <p>If the information matches our records we will send you a reactivation link in your Email</p>
                        </label>
                        <label>
                            <p>UserName</p>
                            <input name="firstName" />
                        </label>
                        <label>
                            <p>Email</p>
                            <input name="email" type='email'/>
                        </label>
                        <label>
                            <p>If you have changed your E-mail, please contact our Customer Care</p>
                        </label>
                        
                        <Link to='/login'><button>Submit</button></Link>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword