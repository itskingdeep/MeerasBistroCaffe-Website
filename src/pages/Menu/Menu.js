import React from 'react'
import Menu_hero from '../../components/Menu_hero'
import Menu_item from '../../components/Menu_item'
import Gallery from '../../components/Gallery'
import Card from '../../components/Card'
import Instagram from '../../components/Instagram'
import Banner from '../../components/Banner'


const Menu = () => {
  return (
    <div className='Menu_main'>
        
         <Banner name="MENU"/>
        <Menu_hero/>
        <Menu_item/>
    <Card/>
    <Instagram/>
    </div>
  )
}

export default Menu