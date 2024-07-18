import React from 'react'
import '../components/des.css'
import ip from '../components/29.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Ipfaq() {
  return (
    <div className='container11' data-aos='fade-up'>
      <img src={ip}></img>
      <h1>IP FAQs</h1>
      <p>Read our responses to some frequently asked questions about Dogecoin IP.</p>
      <a href=''>Visit➡</a>
    </div>
  )
}

export default Ipfaq
