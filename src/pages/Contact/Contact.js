import React from 'react'
import Banner from '../../components/Banner'
import Location from '../../assests/Location (1).png'
import vector from '../../assests/Vector.png'
import './Contact.css'


const Contact = () => {
    return (
        <div>
            <Banner name='Contact Us' />
            <div className='Contactus'>
                <div className='Contact-content'>

                    <h1>Contact Information</h1>
                    <p>Hello! Lets get in touch</p>
                    <div className='contact-section'>
                        <div className='contact-div-img'>
                            <img src={Location} alt=''></img>
                        </div>
                        <div className='contact-div'>
                            <p>C-37, C Block, 1st floor, Radial Rd 5, Connaught Place, New Delhi, 110001</p>
                        </div>

                    </div>
                    <div className='contact-section'>
                        <div className='contact-div-img'>
                            <img src={vector} alt=''>

                            </img>
                        </div>
                        <div className='contact-div'>
                            <p>

                                openhousecafe@firstfiddle.in
                            </p>
                        </div>

                    </div>


                    <div className='contact-section'>
                        <div className='contact-div-img'>
                            <img src={vector} alt=''></img>
                        </div>

                        <div className='contact-div'>
                            <p>9999611334</p>
                        </div>

                    </div>
                </div>
                <div className='contact-map'>

                </div>
            </div>
        </div>
    )
}

export default Contact