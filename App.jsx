import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Navbar from "./Navbar/Navbar"
import Contact  from "./Contact/Contact"
import Home from "./Home/Home"
import About from "./About/About"
import Join from "./Join/Join"
function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar />
    <Routes>
   
      <Route path="/" element = {<Home />} />
      <Route path="/about" element = {<About />} />
      <Route path="/join" element = {<Join />} />
      <Route path="/contact" element = {<Contact />} />
    </Routes>

</BrowserRouter>
    </>
  )
}

export default App
