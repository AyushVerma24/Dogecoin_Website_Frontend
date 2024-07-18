import React from 'react'
import e from '../components/e-letter-img.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
function E() {
  return (
    <div className='elogo' data-aos="fade-up">
        <img src={e}></img>
    </div>
  );
}

export default E
