import React, { useRef, useState } from 'react'
import Sidebar from './Sidebar'
import {Divide as Hamburger} from 'hamburger-react'


const Front = () => {
  const click = useRef()
  const sideDiv = useRef()
  const [isOpen , setOpen] = useState(false)
  const handleClick = () => {
    sideDiv.current.classList.toggle('show-sidebar')
  }
  return (
    
    <>
    <Sidebar side={sideDiv}/>
    <div className="row front justify-content-center align-items-center">
        <div className="col-sm-2">
          
            <div onClick={handleClick} ref={click} className="menu">
              
                <Hamburger color= "white" toggled={isOpen} size={40} rounded toggle={setOpen}/>
            </div>
        </div>
        <div className="col-sm-10">
            <h1 className='display-1 fw-bolder adapt-text'>adaptive</h1>
            <h2>to your business, your growth & the future.</h2>
            <p>Proudly serving the world's top asset finance & leasing companies with smart software technology for over four decades.</p>
        </div>
        <div className="explore">EXPLORE</div>
    </div>
    </>
  )
}

export default Front