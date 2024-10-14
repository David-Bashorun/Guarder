import React from 'react'
import '../App.css';
function Banner() {
  return (
    <>
    <div className='bigdawg' >
            <div className='sect-word'>
              <div><h1>ELECTRICAL <br />  SERVICE <br /> PROVIDERS</h1></div>
              <div><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p></div>
              <button className='btn2'>Contact Us</button>
            </div>
            <div>
              <div className='Caroudiv'>
                <img src="../images/slider-img.jpg" alt="" className='slide'/>
                <button className='prev'><img src="../images/prev.png" alt="" /></button>
              <button className='next'><img src="../images/next.png" alt="" /></button>
              </div>
              
            </div>
          </div>
    </>
  )
}

export default Banner