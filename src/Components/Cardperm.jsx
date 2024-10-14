import React from 'react'

function Cards({ image , title}) {
  return (
      <div className='hhhh'>
        <div className='mm'>
          <div className='gg'><img src={image} alt="" className='link' /></div>
          <h3 className='title'>{title}</h3>
          <p  className='p'>There are many variations of passages of Lorem Ipsum available,</p>
        </div>
    </div>
  )
}

export default Cards