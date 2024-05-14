import React from 'react'
import logo from '../assests/logo1.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt=''>

        </img>
        <p>Join our mailing list for updates,
Get news & offers events.</p>
<div className='footer-content'>
    <div className='contact'>
        <span>CONTACT</span>
        <p>C-37, C Block, 1st floor, Radial Rd 5, Connaught Place, New Delhi, 110001
Call - 9999611334</p>

    </div>
    <div className='email'>
        <input placeholder='Email'></input>
        <button>Subscribe</button>

    </div>
    <div className='timing'>
        <span>TIMING</span>
        <p>Mon – Fri: 11am - 1am</p>
         <p>Sat - Sun: 11am - 1am</p>
    </div>

</div>
<hr>
</hr>
<p>Copyright © 2024 Openhouse-Cafe | All Rights Reserved</p>
    </div>
  )
}

export default Footer