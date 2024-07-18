import React from 'react'
import Pedia from '../components/dogepedia.js'
import Btn from '../components/btn.js'
function Divlink() {
  return (
    <>
    <div className='container4'>
        <p><br></br><br></br></p>
        <Pedia/>
    <div className=' container5' >
        <div className='links'>
      <a1><a href='#'>FAQ</a></a1>
      <hr></hr>
      <a href='#'>Resources</a>
      <hr></hr>
      <a href='#'>How To's</a>
      <hr></hr>
      <a href='#'>Doumentation</a>
      <hr></hr>
      </div>
    </div>
    <Btn/>
    </div>
    </>
  )
}

export default Divlink
