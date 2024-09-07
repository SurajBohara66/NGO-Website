import React from 'react'
import './Navbar.css'
import logo from '../Assets/anchor.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="linkContainer">
            <ul>
                <li><Link to="/"  className='links'>Home</Link></li>
                <li><Link to="/about" className='links'>About Us </Link></li>
                <li><Link to="/join" className='links'>Join Us</Link></li>
               
            </ul>
            <div className="btnContainer">
            <button type="button" className='donateBtn'>Donate</button>
        </div>
        </div>
       
      </div>
    </>
  )
}

export default Navbar
