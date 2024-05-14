// Card.js

import React from 'react';
import './Card.css';
import ambience from '../assests/Ambience.jpg'
import drink from '../assests/drink.jpg'
import food from '../assests/food.jpg'

const Card = () => {
  return (
    <div className='Gallery'>
        <span>GALLERY</span>
        <h2>GALLERY</h2>
     <div className='card-container'>
 <div className="card">
      <img src={food} alt="Card" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Food</h2>
      
       
      </div>
    </div>
    <div className="card">
      <img src={drink} alt="Card" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Drink</h2>
      
       
      </div>
    </div>
    <div className="card">
      <img src={ambience} alt="Card" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Ambience</h2>
      
       
      </div>
    </div>
    </div>
    </div>
    
   
  );
}

export default Card;
