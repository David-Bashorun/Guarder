import React from 'react'

function Contact() {
  return (
    <>
    <section>
          <div className='kli'><h3>Contact Us <img src="../images/plug.png" alt=""/></h3></div>
          <div className='nnic'>
            
            <div className='jj'>
            
              <form>
                <input type='text' placeholder='Name' className='kk' />
                <input type='email' placeholder='Email' className='kk'/>
                <input type='number' placeholder='Phone Number' className='kk'/>
                <input type='text' placeholder='Message' className='biggiekk' />
              </form>
              <div><button>SEND</button></div>
            </div> 
            <div>
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" className='nni'  allowfullscreen></iframe>
              
            </div>   
          </div>
        </section>
    </>
  )
}

export default Contact