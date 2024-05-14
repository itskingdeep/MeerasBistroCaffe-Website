import React from 'react'
import open from '../assests/open.jpg'
import './TableBook.css'

const TableBook = () => {
    return (
        <div className='tablebook'>
            <div className='table-content'>
                <span>RESERVATION</span>
                <h2>Book your table now</h2>
                <p>Don't wait to indulge in the visual and culinary magic of Openhouse - book your table now and let the feast begin!</p>
                <div>
                <form className='form'>
                    <div className='row'>
                        <div className='col'>
                            <input type='text' placeholder='NAME'>
                            </input>
                        </div>
                        <div className='col'>
                            <input type='text' placeholder='EMAIL'>
                            </input>
                        </div>


                    </div >
                    <div className='row'>
                        <div className='col'>
                            <input type='text' placeholder='PHONE'></input>


                        </div>
                        <div className='col'>
                            <input type='text' placeholder='TIME'></input>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col'>
                            <input type='date' placeholder='PHONE'></input>


                        </div>
                        <div className='col'>
                            <input type='time' placeholder='TIME'></input>
                        </div>

                    </div>
                    <div className='table-btn'>
                    <button> BOOK TABLE</button>
                    </div>
                  

                </form>
                </div>
                
            </div>
            <div className='tabe-img'>
                <img src={open} alt=''></img>
            </div>
        </div>
    )
}

export default TableBook