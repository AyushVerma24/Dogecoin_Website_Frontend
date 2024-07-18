import React from 'react'
import announce from '../components/28.png'
import '../components/des.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Announcements() {
  return (
    <div className='container10' data-aos='fade-up'>
      <img src={announce}></img>
      <h1>Announcements</h1>
      <p>Announcements from the Dogecoin Foundation can be found here.</p>
      <a href=''>Visit➡</a>

    </div>
  )
}

export default Announcements
