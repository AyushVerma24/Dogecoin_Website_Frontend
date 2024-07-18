import React from 'react'
import blog from '../components/27.png'
import '../components/des.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Blogs() {
  return (
    <div className='container9' data-aos='fade-up'>
      <img src={blog}></img>
      <h1>Blogs</h1>
      <p>Stay up to date with blog posts from Foundation Developers!</p>
      <a href=''>Visit➡</a>
    </div>
  )
}

export default Blogs
