import React from 'react'
import Banner from '../../components/Banner'
import   about from '../../assests/about us.png'
import './About.css'
import BackgroundImage from '../../components/BackgroundImages'
import ChefDetails from '../../components/ChefDetails'
import Gallery from '../../components/Gallery'
import Blog from '../../components/Blog'
import Reserved from '../../components/Reserved'
import Instagram from '../../components/Instagram'

const About = () => {
  return (
    <div className='about'>
        <Banner name="About Us"/>
        <div className='banner-content'>
            <div className='banner-line'>
                <span>About us</span>
                <h2>Quality and Tradition</h2>
                <p>Openhouse Café, located in the inner circle of CP, offers a lounge experience with dim lights, mahogany furniture, and leather seating. Enjoy live performances and a diverse food menu, including DJ, acoustic, Sufi, EDM, and Bollywood nights. Perfect for sports lovers, the big screen offers a world of celebration while the terrace boasts a breathtaking view of CP's Central Park.

Priyank Sukhija</p>
</div>
<div className='about-img'>
<img src={about}alt=''></img>



            </div>

        </div>
        <BackgroundImage/>
        <ChefDetails/>
        <Gallery/>
        <Blog/>
        <Reserved/>
        <Instagram/>
          
    </div>
  )
}

export default About