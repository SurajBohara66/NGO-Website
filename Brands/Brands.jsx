import React from 'react'
import './Brands.css'
import sbilogo from "../Assets/SbiLogo.png"
import wiprologo from "../Assets/WiproLogo.png"
import indexplogo from "../Assets/IndianExpressLogo.png"
import amullogo from "../Assets/AmulLogo.png"
import phonepelogo from "../Assets/PhonePeLogo.png"
function Brands() {
  return (
    <>
      <div className="brandContainer">
        <img src={sbilogo} alt="" className='brandImg'/>
        <img src={wiprologo} alt="" className='brandImg'/>
        <img src={indexplogo} alt="" className='express' />
        <img src={amullogo} alt="" className='brandImg'/>
        <img src={phonepelogo} alt="" className='brandImg'/>
      </div>
    </>
  )
}

export default Brands
