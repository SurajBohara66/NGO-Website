import React from 'react'
import './Home.css'
import HeroSection from '../HeroSection/HeroSection'
import Brands from '../Brands/Brands'
import Video from '../Video/Video'
import Footer from '../Footer/Footer'
import Volunteer from '../Volunteer/Volunteer'
function Home() {
  return (
    <>
   <HeroSection />
   <Brands />
   <Video />
   <Volunteer />
   <Footer />
    </>
  )
}

export default Home
