import React from 'react'
import './About.css'
import AboutBox from './AboutBox'
import Img1 from '../Assets/anchor.png'
import AboutVideo from '../Assets/Video.mp4'
import Card from './Card'
import CauseImg1 from '../Assets/poorkid.jpg'
import CauseImg2 from '../Assets/Img1.jpg'
import CauseImg3 from '../Assets/Img2.jpg'
import Footer from '../Footer/Footer'

function About() {
  return (
    <>
     <div className="aboutMediaContainer">
<video src={AboutVideo} autoPlay muted loop></video>
     </div>
     <div className="aboutOverview">
      <div className="abtTxt">
        <div className="heading">
        <h1>Story About</h1>
        <h1 className='yellow'>What We Do</h1>
        </div>
        <div className="abtTxtPara">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum impedit est voluptatibus corrupti, vel temporibus. Aperiam eveniet nam, facilis earum doloremque molestiae sed, debitis hic dicta quaerat iusto quae. Laboriosam enim inventore aspernatur itaque corrupti molestiae, dignissimos harum consectetur recusandae nihil exercitationem?</p>
        </div>
     <button type="button" className='knowMoreBtn'>Know More</button>
      
      </div>
      <div className="abtDetails">
        <AboutBox AbtImg = {Img1} title ="Leave A Legacy" AbtTitle ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. " />
        <AboutBox  AbtImg = {Img1} title ="Leave A Legacy" AbtTitle ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. "/>
        <AboutBox  AbtImg = {Img1} title ="Leave A Legacy" AbtTitle ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. "/>
        <AboutBox  AbtImg = {Img1} title ="Leave A Legacy" AbtTitle ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. "/>
      </div>
     </div>
     <div className="featuredCauses">
      <div className="featuredTitle">
        <h1>Featured <span>Causes</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum est ab dolorem nesciunt voluptate veniam eveniet, assumenda possimus blanditiis ipsum earum nobis recusandae?</p>
      </div>
      <div className="cards">
      <Card causeImg = {CauseImg1} title="Many different ways today to find" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in consectetur at optio esse nam sint totam officia!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in consectetur at optio esse nam sint totam officia!"/>
      <Card causeImg = {CauseImg2}  title="Many different ways today to find" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in consectetur at optio esse nam sint totam officia!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in consectetur at optio esse nam sint totam officia!"/>
      <Card causeImg = {CauseImg3}  title="Many different ways today to find" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in consectetur at optio esse nam sint totam officia!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in consectetur at optio esse nam sint totam officia!"/>
      </div>
     </div>
     <Footer />
    </>
  )
}

export default About
