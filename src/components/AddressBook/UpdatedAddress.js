import React from 'react'
import { BiLocationPlus, BiPhoneCall } from 'react-icons/bi'
import { GiEgyptianProfile } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './UpdatedAddress.css'
import { useSelector } from 'react-redux'


const updatedAddress=()=> {
  
  
  
  return (
    <div>
      <Header/>
      <div className='Cover'>
        
        <div className='secondCover'>
          <h1>Address Book</h1>
          <div className='thirdCover' >
              <p><GiEgyptianProfile size='80px'/>Name : {}</p>
              <p><BiLocationPlus size='80px'/>Address : {}</p>
              <p><BiPhoneCall size='80px'/>Phone : {}</p>
            </div>
            <Link to='/CustomerProfile'><button >Back</button></Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default updatedAddress