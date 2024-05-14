import React from 'react'
import insta from '../assests/insta.jpg'
import insta1 from '../assests/insta1.jpg'
import insta2 from '../assests/insta2.jpg'
import insta3 from '../assests/insta3.jpg'
import './Instagram.css';

const Instagram = () => {
  return (
    <div className='instagram'>
        <span>Instagram</span>
        <h2>@Openhouse-Cafe</h2>
        <div className='instagram-post'>
            <img src={insta} alt=''></img>
            <img src={insta1} alt=''></img>
            <img src={insta2} alt=''></img>
            <img src={insta3} alt=''></img>

        </div>
    </div>
  )
}

export default Instagram