import React from 'react'
import '../styles.css'

const Sidebar = ({side}) => {
  return (
    <>
    <div ref={side} className="sidebar">
      <div className="d-flex justify-content-between col-lg-11 p-3 m-auto">
        <div className="logo">
          <img  style={{
            width:'50px'
        }} src="https://netsoltech.com/images/netsol-logo-white.svg" alt="" />
        </div>
        <div className="buttons">
          <div className='btn butn '>CAREERS</div>
          <div className='btn butn '>CONTACT US</div>
        </div>
      </div>
    <div className="background-image">
          <img src={'https://netsoltech.com/images/investorsVector.svg'} alt="" />
        </div>

        {/* <div className="menu">
   <ul>
      <li className='home'>
         <span>01</span>
         <a href="">Home</a>
      </li>
   </ul>
</div> */}
        <div className="overlay">
        <ul>
            <div className="list d-flex flex-column">
                <div className="num fs-6">01</div>
                <li>Home</li>
            </div>
            <div className="list d-flex flex-column">
                <div className="num fs-6">02</div>
                <li>About</li>
            </div>
            <div className="list d-flex flex-column">
                <div className="num fs-6">03</div>
                <li>Product</li>
            </div>
            <div className="list d-flex flex-column">
                <div className="num fs-6">04</div>
                <li>Investor</li>
            </div>
            <div className="list d-flex flex-column">
                <div className="num fs-6">05</div>
                <li>Events</li>
            </div>

        </ul>
    </div>

    </div>
    </>
  )
}

export default Sidebar