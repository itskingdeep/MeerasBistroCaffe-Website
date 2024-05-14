import React from 'react'
import './Blog.css';
import  blogs from '../assests/blog.jpg'

const Blog = () => {
  return (
    <div className=' blog-main'>
        <div className='blog-content'>
            <span>BLOG</span>
            <h2>Discover the World of Openhouse-Cafe</h2>
            <p>Our blog is your ultimate guide to all things openhouse cafe,
featuring famous dishes, chef specials, and the secrets that make us great!</p>
</div>
<div className='blog-div'>
<div className='blog-card'>
    <img  src={blogs} alt=''></img>
    <div className='blog-card-content'>
        <span>RESTAURANTSFEB 22, 2022</span>
        <h2>
        Experience the Perfect Hangout Spot: Openhouse Café in Connaught Place.
        </h2>
        <p>Are you looking for the perfect hangout spot that combines delicious food, high-energy vibes, and exciting events? Look no further than Openhouse Café in Connaught Place!

Read More...</p>




</div>

        </div>
        <div className='blog-card'>
    <img  src={blogs} alt=''></img>
    <div className='blog-card-content'>
        <span>RESTAURANTSFEB 22, 2022</span>
        <h2>
        Experience the Perfect Hangout Spot: Openhouse Café in Connaught Place.
        </h2>
        <p>Are you looking for the perfect hangout spot that combines delicious food, high-energy vibes, and exciting events? Look no further than Openhouse Café in Connaught Place!

Read More...</p>




</div>

        </div>
    </div>  
</div>

  )
}

export default Blog