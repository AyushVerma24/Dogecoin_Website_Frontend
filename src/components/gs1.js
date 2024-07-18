import React, { useEffect } from 'react'
import '../components/des.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Gs1() {
useEffect(()=>{
    AOS.init({duration:1000});
},[]);
    return (

    <>
    <div className='container1 animated' data-aos="fade-left">
      <p><p2>01</p2> choose your wallet</p>
      <p1>A wallet is necessary for people wanting to use, trade, or hold Dogecoin. You can pick a wallet</p1>
      <br></br><br></br><button onclick='<a href=#>'>Learn More.</button>
    </div>
    </>
  )

}

export default Gs1
