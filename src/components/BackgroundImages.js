import React from 'react';
import icon_img from '../assests/icon-glass.png'
import drink from '../assests/drink.png'
import sofa from '../assests/sofa.png'
import music from '../assests/music.png'

const BackgroundImage = () => {
    return (
      
        <div className='bg-img'>
        <div className='seperate-content'>
          
            <img src={icon_img} alt=''></img>
          
          <div className='seperate-text'>
          <h2>Multi-Cuisine</h2>
    <p>One bite and experience a delightful burst of flavours.</p>
          </div>
        </div>
      
        <div className='seperate-content'>
          
            <img src={drink} alt=''></img>
          
          <div className='seperate-text'>
          <h2>Delectable Concoctions</h2>
    <p>Explore flavourful cocktails that are crafted to perfection.</p>
          </div>
        </div>
        <div className='seperate-content'>
          
            <img src={sofa} alt=''></img>
          
          <div className='seperate-text'>
          <h2>Rustic Ambience</h2>
    <p>Explore Openhouse’s rustic timeless decor with a modern touch.</p>
          </div>
        </div>
        <div className='seperate-content'>
          
            <img src={music} alt=''></img>
          
          <div className='seperate-text'>
          <h2>Surreal Vibes</h2>
    <p>With an eclectic decor, Openhouse is all about surreal vibes.</p>
          </div>
        </div>
    </div>
    );
}

export default BackgroundImage;
