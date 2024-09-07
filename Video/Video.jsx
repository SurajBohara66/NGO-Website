import React from 'react'
import './Video.css'
import video from '../Assets/Video.mp4'
function Video() {
  return (
   
    <>
      <div className="videoContainer">
        <video src={video} autoPlay loop muted></video>
      </div>
    
    </>
  )
}

export default Video
