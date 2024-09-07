import React from 'react'
import './Volunteer.css'
import { Link } from 'react-router-dom'
function Volunteer() {
  return (
    <>
      <div className="volunteerContainer">
        <h1>Become a Volunteer</h1>
        <p>Join us for a better life and beautiful future</p>
        <button type="button"><Link to="/join">Join Us Now</Link></button>
      </div>
    </>
  )
}

export default Volunteer
