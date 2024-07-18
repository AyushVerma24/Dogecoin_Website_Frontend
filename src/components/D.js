import React from 'react'
import dl from '../components/d-letter-img.png'
import '../components/des.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function D() {
  return (
    <div className='dlogo ' data-aos="fade-up">
      <img src={dl}></img>
    </div>
  )
}

export default D
