import React from 'react'

function Newcard({img}) {
  return (
    <div className='engine'>
        <img src={img} alt="" />
        <div className='details'>
            <div >
                <h3>Blog Title Goes Here</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
            </div>
        </div>
    </div>
  )
}

export default Newcard