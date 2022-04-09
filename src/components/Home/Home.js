import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../Home/Home.css';
import Image1 from '../Images/HD1.jpg'

function Home() {
   
    function handleCreate_Account(e){}
  return (
    <div>  <Header/>
        <div className='MainFrame'>
            
            <div className='frameCover'>
                <div className='Frame3'>
                    <h1> Open a SmartTrack business account</h1>
                    <div> The best for your business. Enjoy realiable delivery solution that meets your unique and complex shipping needs</div>
                </div>
                <div><Link to= '/Register'> <button onClick={handleCreate_Account()}>Sign up</button> </Link></div>
            </div>
            <div className='Frame1' > 
                 <div><p>Freight</p></div>
                 <div className='back'>
                    <img className='photo' src={Image1} size='20px'/>
                </div> 
                <div><p>Shipping</p></div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home