import React from 'react'
import menu from '../assests/menu.jpg'
import './Menu_hero.css'
const Menu_hero = () => {
  return (
    <div className='menu'>
      <div className='menu-img'>
        <img src={menu} alt=''>
        </img>
      </div>
      <div className='menu-content-bg'>
        <div className='menu-content'>  
          <h2>Artfully Curated Menu</h2>
          <div className='x1'>
            <p>The multi-cuisine menu at Openhouse Cafe is a culinary delight, curated by a team of expert chefs. From our mouth-watering Peri Peri Creamy Fries and signature Peri Peri Chicken Wings, to our scrumptious American Fiesta Pizza and Pullangy Chicken Lollypop, our menu offers a diverse range of flavors that will tantalize your taste buds.  </p>
          </div>

          <div>
            <p>Vegetarians can indulge in our delectable Almond Malai Chicken Tikka, along with a range of other vegetarian options, including soups, salads, and bread. End your meal on a sweet note with our selection of afters. Come and indulge in a gastronomical experience like no other at Openhouse Cafe.
            </p>  </div>
        </div>

      </div>
      </div>
      )
}

      export default Menu_hero