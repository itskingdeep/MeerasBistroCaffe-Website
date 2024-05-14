import React from 'react'
import banner1 from '../../assests/banner1.png'
import './Home.css'
import location from '../../assests/Location.png'
import story from '../../assests/the-story.jpg'

// import chef from '../../assests/chef.jpg'
import ChefDetails from '../../components/ChefDetails'
import BackgroundImage from '../../components/BackgroundImages'
import Card from '../../components/Card'
import Offer from '../../components/Offer'
import Blog from '../../components/Blog'
import Reserved from '../../components/Reserved'
import Instagram from '../../components/Instagram'



const Home = () => {
    return (
        <div className='hero'>
            <div className='hero-main'>
                <div className='content-banner'>
                    <h1>Welcome to Openhouse!</h1>
                    <p>Where art, music, and great food come together to create a unique experience</p>
                    <button className='phone-number-nav'>BOOK A TABLE</button>
                </div>
                <div className='content-iamge'>
                    <img src={banner1} alt=''>
                    </img>

                </div>

            </div>

            <div className='bread-crum'>

                <div className='location'>
                    <img src={location} alt='' className='img-fluid' ></img>
                    <div className='locat'>
                        <span>Locate us </span>
                        <p>C-37, C Block, 1st floor, Radial Rd 5, Connaught Place, New Delhi, 110001 </p>

                    </div>

                </div>
                <div class="location">
                    <img src={location} alt=''></img>
                    <div className='locat'>
                        <span>Open Hour</span>
                        <p > C-37, C Block, 1st floor, Radial Rd 5, Connaught Place, New Delhi, 110001 </p>
                    </div>

                </div>


                <div class="location">
                    <img src={location} alt=''></img>
                    <div className='locat'>
                        <span>Open Hour</span>
                        <p > C-37, C Block, 1st floor, Radial Rd 5, Connaught Place, New Delhi, 110001 </p>
                    </div>

                </div>


            </div>

            {/* story */}


            <div className='story'>
                <div className='story-image'>
                    <img src={story} alt=''></img>

                </div>
                <div className='story-content'>
                    <span>THE STORY</span>
                    <p>Established in 2015, Openhouse is an eclectic café adorned with mechanical artwork, superhero masks, and other props that add an industrial and surreal vibe to the place. Our diverse events schedule includes DJ Nights, Acoustic sessions, Sufi Nights, and Bollywood Nights, keeping the evenings lively and entertaining for our clients.

                        "Openhouse Café in CP is the perfect blend of entertainment and cuisine, with live performances, a diverse menu, and sports screenings, all served up with a side of stunning views from the terrace."</p>

                </div>

            </div>

            <BackgroundImage />

            {/* chef */}

            <ChefDetails />

          <Card/>

          <Offer/>
          <Blog/>
          <Reserved/>
          <Instagram/>

        </div>
    )
}

export default Home