import React from 'react'
import Card from './Card'
import Cards from './Cardperm'
function Services() {
  return (
    <>
    <section>
        <div className='kids'><h1>Our Services <img src="../images/plug.png" alt=""/></h1></div>
          <div className='chinn'>
            <Card image='../images/s1.png' title='Equipment installation' />
            <Cards image='../images/s2.png' title='Windmill Energy' />
            <Card image='../images/s3.png' title='Equipment Maintenance' />
            <Card image='../images/s4.png' title='Offshore Engineering' />
            <Card image='../images/s5.png' title='Electrical Wiring' />
          </div>
          <div className='divdiv'><button className='btn3'>Read More</button></div>
    </section>
    </>
  )
}

export default Services