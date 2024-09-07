import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <>
      <div className="heroContianer">
        <div className="mainTxt">
          <div className="introTxt">
          <p>Hope For</p>
          <p>Humanity</p>
          </div>
          <div className="mainBtns">
            <p>GIVE A HELPING HAND TO THOSE WHO NEED IT!</p>
            <div className="introBtns">
              <button type="button" className='getStarted'>Get Started</button>
              <button type="button" className='heroDonate'>Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
