import React,{ useState } from 'react'
import menus from '../assests/menus.jpg'
import './Menu_item.css'

const Menu_item = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        order: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, such as sending data to a backend server
        console.log(formData);
        // Reset form fields after submission if needed
        setFormData({
          name: '',
          mobileNumber: '',
          order: ''
        });
      };
  return (
    <div className='menu_item'>
        {/* <span>OUR MENUS</span> */}
        
            <img src={menus} alt='' className='menu-item-img'></img>
      
            <div className='form-container'>
      <span>ON DEMAND</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
         
        </div>
        <div>
          <label htmlFor="name">Table Number:</label>
          <input
            type="number"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Date:</label>
          <input
            type="Date"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="order">Order:</label>
          <textarea
            id="order"
            name="order"
            value={formData.order}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
    
       

    </div>
  )
}

export default Menu_item