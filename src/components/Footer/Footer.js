import React from 'react'
import { BiCar, BiMailSend } from 'react-icons/bi';
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../Footer/Footer.css'

function Footer() {
  return (
    <div>
        <div>
            <nav className='footer'>
                <div className='first'>
                    <div>
                        <p><BiCar size='50px'/> This is a mordern world.<br/> You request...<br/><br/> we deliver</p>
                    </div>
                    <div className='firstInner'>
                        <h2>Follow us on </h2>
                        <div className='social'>
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaDiscord/>
                        </div>

                    </div>
                </div>
                <div className='second'>
                    <h2>Services</h2>
                    <p>Freight</p>
                    <p>shipping</p>
                    <p>How it works</p>

                </div>
                
                <div className='Third'>
                    <h2>Resources</h2>
                    <p>Documentation</p>
                    <p>News update</p>
                    <p>Blog</p>
                </div>
                <div className='forth'>
                    <h2> Contact Us</h2>
                    <p>0797181975</p>
                    <p><BiMailSend size='30px'/>smartparceltrack@gmail.com</p>

                </div>          
            </nav>
        </div>
    </div>
  )
}

export default Footer