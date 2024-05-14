import React from 'react'
import TableBook from '../../components/TableBook'
import Card from '../../components/Card'
import Instagram from '../../components/Instagram'
import Banner from '../../components/Banner'

const Reservation = () => {
  return (
    <div>
        <Banner name='RESERVATION'/>
        <TableBook/>
        <Card/>
        <Instagram/>
    </div>
  )
}

export default Reservation