import React from 'react'
import food1 from '../assests/food1.jpg'
import food2 from '../assests/food2.jpg'
import middle from '../assests/middle.jpg'
import drink1 from '../assests/drink1.jpg'
import drink2 from '../assests/drink2.jpg'
import './Gallery.css'
const Gallery = () => {
  return (
    <div className='gallery'> 
    <span>GALLARY</span>
    <h2>What We Make</h2>
    <div className='gallery-img'>
        <div className='gallery-img-left'>
            <img  src={food1} alt=''></img>
            <img src={food2} alt=''></img>
        </div>
        <div className='gallery-img-middle'>
            <img src={middle} alt=''></img>
        </div>
        <div className='gallery-img-right'>
         <img  src={drink1} alt=''></img>
         <img src={drink2} alt=''></img>
        </div>
    </div>
    </div>
  )
}

export default Gallery