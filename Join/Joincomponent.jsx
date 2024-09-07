import React from 'react'
import './Join.css'
function Joincomponent(props) {
  return (
    <>
      <div className="joinbox">
        <div className="number">
<p>{props.number}</p>
        </div>
        <div className="numberAbout">
<p>{props.aboutNumber}</p>
        </div>
      </div>
    </>
  )
}

export default Joincomponent
