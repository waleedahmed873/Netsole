import React, { useRef } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
    const list = useRef();
    const showList = () => {
        list.current.classList.toggle('show')
    }
  return (
    <>
    <div className="d-flex justify-content-between col-lg-11 p-3 m-auto">
        <img style={{
            width:'50px'
        }} src="https://netsoltech.com/images/netsol-logo-white.svg" alt="" />
        <div className="dropdown">
            <p className='fw-bold'>English <RiArrowDropDownLine onClick={showList} style={{
                cursor:'pointer'
            }} size={30} /></p>
            <ul ref={list} className='list-unstyled'>
                <li>Arabic</li>
                <li>Urdu</li>
                <li>German</li>
                <li>French</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header