import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='main-header'>
        <div className='header'>
            <button className='phone-number-nav'> Call- 8057230164</button>
            <div className='middle-nav'> MEERAS-BISTRO</div>
            <button className='reservation-nav'>RESERVATION</button>

        </div>
        <hr></hr>
        <div className='navbar'>

            <div className='nav-link'>
                <a href='/'><li >Home</li></a>
               <a  href='/about'><li>About</li></a>
               <a href='/menu'><li>Menu</li></a> 
                <a href='/reservation'><li>Reservation</li></a>
                <a href='/gallery'><li>Gallery</li></a>
                <a href='/blog'><li>Blog</li></a>
                <a href='/contact'><li>Contact</li></a>

            </div>

        </div>
        <hr></hr>
    </div>
  )
}

export default Header