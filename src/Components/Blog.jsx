import React from 'react'
import Newcard from './newcard'
function Blog() {
  return (
    <>
    <section>
          <div className='bb'><h1>Blog <img src="../images/plug.png" alt=""/></h1></div>
          <div className='nn'>
            <Newcard img='../images/blog1.jpg'/>
            <Newcard img='../images/blog2.jpg'/>
          </div>

        </section>
    </>
  )
}

export default Blog