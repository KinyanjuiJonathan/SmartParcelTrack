import React from 'react'
import { BiMessageRoundedDots,BiScan, BiHome } from 'react-icons/bi';
import {FaUserGraduate } from 'react-icons/fa';
import'../Header/Header.css'
import { Link } from 'react-router-dom';
import Image1 from '../Images/HDlogo.jpg'


function Header() {
       
    
  return (
    <div className='navBar'>
        <div className='logo'>
           <Link to='/'><img className='logo1' src={Image1} sizes='20px'/></Link>
        </div>
        <nav className='topNav'>
            <div>
                <Link to='/'><p className='homeLink'><BiHome/>Home</p></Link>
            </div><div>
                <p><BiMessageRoundedDots/>Chat</p>
            </div>
            
            <div>
                <p><BiScan/>Tracker</p>
            </div>
            <div>
                <p><FaUserGraduate/>Reviews</p>
            </div>
           <Link to='/login'><button> Login </button></Link>
           <Link to='/Register'><button> Register</button></Link>
        </nav>
    </div>
  )
}

export default Header