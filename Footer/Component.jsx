import React from 'react'
import './Footer.css'
function Component(props) {
  return (
    <>
      <div className="footerBox">
        <h3>{props.title}</h3>
        <ul>
            <li><a href="#">{props.first}</a></li>
            <li><a href="#">{props.second}</a></li>
            <li><a href="#">{props.third}</a></li>
        </ul>
      </div>
    </>
  )
}

export default Component
