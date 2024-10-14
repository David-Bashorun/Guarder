import React from 'react'
import '../App.css'
function Footer() {
  return (
    <>
    <section className='qwer'>
          <div className='nb'>
            <div className='mni'>
              <ul>
                <li><img src="../images/location-white.png" alt=""/> Passages of Lorem Ipsum available</li>
                <li><img src="../images/telephone-white.png" alt=""/> Call : +012334567890</li>
                <li><img src="../images/envelope-white.png" alt=""/> demo@gmail.com</li>
              </ul>
            </div>
            <div className='cc'>
              <input type='Email' placeholder='Enter your email' />
              <button>SUBSCRIBE</button>
              <div>
              <img src="../images/fb.png" alt=""/>
              <img src="../images/twitter.png" alt=""/>
              <img src="../images/linkedin.png" alt=""/>
              <img src="../images/instagram.png" alt=""/>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Footer