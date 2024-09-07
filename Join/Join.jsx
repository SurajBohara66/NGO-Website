import React from 'react'
import './Join.css'
import Joincomponent from './Joincomponent'
import Footer from '../Footer/Footer'
function Join() {
  return (
    <>
    <div className="joinHeroSection">
      <Joincomponent number ="$80K"  aboutNumber ="Donation"/>
      <Joincomponent number ="400+"  aboutNumber ="Volunteers"/>
      <Joincomponent number ="7500+"  aboutNumber ="People Rescued"/>
      <Joincomponent number ="32+" aboutNumber ="Countries"/>
    </div>
    <div className="joinContent">
      <h1>Be a part of Change</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aliquid atque mollitia, veritatis accusantium quidem eaque autem possimus architecto laborum, nobis dolorem maiores iusto deserunt quis pariatur recusandae nihil, obcaecati commodi molestias eum. Excepturi eligendi voluptas fugit voluptatum possimus ipsam enim odit reiciendis quibusdam ratione! Eos repellat numquam quam, ratione quisquam reiciendis iste quod officia repudiandae, aliquam, beatae temporibus dolor autem sint eaque quas! Dicta minima nam excepturi laudantium.</p>
    </div>
<div className="formContainer">

  <form >
<input type="text" placeholder='Full Name' required/>
<input type="email" placeholder='Email '  required/>
<input type='text'  placeholder=' Mobile '  required/>
<input type="text" placeholder='Phone'  required/>
<input type="text" placeholder='City'  required/>
<input type="text" placeholder='Address'  required/>
<input type="text" placeholder='State'  required/>
<input type="text" placeholder='Country'  required/>
<input type="text" placeholder='Zip Code'  required/>
<input type="text" placeholder='Occupation'  required/>

<input type="submit" className='submitbtn' />
  </form>
</div>
<Footer />
    </>
  )
}

export default Join