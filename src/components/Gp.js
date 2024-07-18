import React from 'react'
import g from '../components/g-letter-img.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
function G() {
  return (
    <div className='glogo' data-aos="fade-up">
      <img src={g}></img>
    </div>
  )
}

export default G
