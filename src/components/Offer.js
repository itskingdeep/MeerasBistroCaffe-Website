import React from 'react'
import './Offer.css'
import drink from '../assests/drink.png'
import sofa from '../assests/sofa.png'
import music from '../assests/music.png'

const Offer = () => {
  return (
    <div className='offer'>
        <div className='Offer-details'>
            <span>WHAT WE OFFER</span>
            <h2> Openhouse isn't just about dining!</h2>
            <p>It's an unforgettable experience through global flavours, served with modern flair amidst rustic décor.</p>

        </div>
        <div className='offer-card'>
        <div className="card-off">
        
            <img src={drink} alt="Card" />
             
      
      <div className="card-content">
        <h2 className="card-title">Unconventional Interiors</h2>
               
       
      </div>
    </div>

    <div className="card-off">
        
        <img src={sofa} alt="Card" />
        
     
      <div className="card-content">
        <h2 className="card-title">Rustic Vibes</h2>
      
       
      </div>
    </div>


    <div className="card-off">
      
        <img src={music} alt="Card"  />
      
     
      <div className="card-content">
        <h2 className="card-title">Thrilling Events</h2>
      
       
      </div>
    </div>



        </div>
    </div>
  )
}

export default Offer