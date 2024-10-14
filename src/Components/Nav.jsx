import React from 'react'

export default function Nav() {
  return (
    <div>
        <nav className='Nav-bar'>
          <h1 className='head'><img src="../images/logo.png" alt="" />Electrochip</h1>
          
            <ul>
                <li ><button className='Chim'>HOME</button></li>
                <li><button className='Big'>ABOUT</button></li>
                <li><button className='Big'>SERVICE</button></li>
                <li><button className='Big'>BLOG</button></li>
                <li><button className='Big'>CONTACT</button></li>
            </ul>
        </nav>
    </div>
  )
}

