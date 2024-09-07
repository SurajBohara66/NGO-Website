import React from 'react'
import './Footer.css'
import Component from './Component'

function Footer() {
  return (
    <>
      <div className="footerContainer">
<Component title = "Our Partners" first = "Qwerty" second = " Qwerty" third = "Qwerty"/>
<Component title = "About Us" first = "Who Are We" second = " How We Work" third = "Protocol"/>
<Component title = "Your Help" first = "Leave A Legacy" second = " Monthly Giving" third = "One-Time Donation"/>
<Component title = "Our Impact " first = "Child Protection" second = " Disaster Relief" third = "Sanitation"/>

      </div>
    </>
  )
}

export default Footer
