import React from 'react'

function Card({ image , title}) {
  return (
      <div className='hhh'>
        <div className='mm'>
          <div className='gg'><img src={image} alt="" className='link' /></div>
          <h3 className='title'>{title}</h3>
          <p  className='p'>There are many variations of passages of Lorem Ipsum available,</p>
        </div>
    </div>
  )
}

export default Card