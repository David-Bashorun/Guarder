import React from 'react'

function About() {
  return (
    <>
         <section className='big-sect'>
            <div className='octopus'>
              <div className='secti-word'>
                <div><h1>About Us<img src="../images/plug.png" alt=""/></h1></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p></div>
                <button className='btn4'>Read More</button>
              </div>
              <div className='doge'>
                <div className='pim'><img src="../images/about-img1.jpg" alt="" className='fin'/></div>
                <div className='pim'>< img src="../images/about-img2.jpg" alt="" className='inch'/></div>
              </div>
            </div>
        </section>
    </>
  )
}

export default About