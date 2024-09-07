import React from 'react'
import './About.css'
function Card(props) {
  return (
    <>
      <div className="cardContainer">
        <div className="causeImg">
            <img src={props.causeImg} alt="" />
        </div>
        <div className="causeDetails">
            <p className='causeTitle'>{props.title}</p>
            <p className="causeContent">{props.content} </p>
        </div>
        <div className="readMore">
          <a href='#'>Read More...</a>
        </div>
      </div>
    </>
  )
}

export default Card
