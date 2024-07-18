import React from 'react'
import opic from '../components/o-letter-img.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
function O() {
  return (
    <div className='ologo' data-aos="fade-up">
      <img src={opic}></img>
    </div>
  )
}

export default O
