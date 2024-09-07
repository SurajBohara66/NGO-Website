import React from 'react'
import './About.css'
function AboutBox(props) {
  return (
    <>
      <div className="box">
        <div className="AbtImg">
        <img src={props.AbtImg} alt="" />
        </div>
      <div className="title">{props.title}</div>
      <div className="AbtTitle">{props.AbtTitle}
      </div>
      </div>
    </>
  )
}

export default AboutBox
