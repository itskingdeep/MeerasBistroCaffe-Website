import React from 'react';
import chefImage from '../assests/chef.jpg';

const ChefDetails = () => {
    return (
        <div className='chef'>
            <div className='chef-detail'>
                <span className='bordered-text'>OUR CHEF</span>
                <h1>Manoj Upadhaye</h1>
                <p>At Openhouse Cafe, our head chef, Manoj Upadhaye, with years of experience in the industry, curates our menu with carefully selected dishes offering a unique blend of flavors and textures. Sourcing fresh ingredients from local markets, his passion for cooking reflects in every dish, ensuring each customer's memorable dining experience.</p>
            </div>
            <img src={chefImage} alt='Chef' />
        </div>
    );
}

export default ChefDetails;
