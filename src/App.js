import './App.css'; 
import Navbar from './components/navbar.js';
import vid from './Header_Video.mp4'
import T1 from './components/t1.js';
import Logo from './components/Log.js';
import Dogetext from './components/dogetext.js'
import T2 from './components/t2.js'
import Des from './components/des.js'
import Despic from './components/despic.js'
import Picunder from './components/picunder.js'
import Gs from './components/gs.js'
import Gs1 from './components/gs1.js'
import Gs2 from './components/gs2.js'
import Gs3 from './components/gs3.js'
import D from './components/D.js'
import O from './components/op.js'
import G from './components/Gp.js'
import E from './components/Ep.js'
import You from './components/youtube.js'
import Yout from './components/youtext.js' 
import Twitter from './components/twitter.js'
import Reddit from './components/reddit.js'
import Discord from './components/discord.js'
import Links from './components/divlink.js'
import Btn2 from './components/btn2.js'
import Foundation from './components/foundation.js';
import Blogs from './components/blogs.js';
import Announcements from './components/announcements.js';
import Ipfaq from './components/ipfaq.js';
import End from './components/end.js';
import doge from './components/doge-logo.png'
import Legal from './components/legal.js';
import Sitemap from './components/sitemap.js';
import Found from './components/found.js';
import map from './footer-map.png'
function App() {
  return (
    <>
       <meta charset="UTF-8"></meta>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Navbar />
    <div class="video"> 
      <video autoPlay muted loop className="video">
        <source src={vid} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
    <T1 />
    <Logo />
    <Dogetext />
    <T2 />
    <Des />
    <Despic />
    <Picunder />
    <Gs />
    <Gs1 />
    <Gs2 />
    <Gs3/>
    <D />
    <O />
    <G />
    <E />
    <You />
    <Yout />
    <Twitter />
    <Reddit/>
    <Discord/>
    <Links />
    <Btn2 />
    <div className='heading'>
      <h1>Find out more about Dogecoin</h1>
    </div>
    <Foundation/>
    <Blogs/>
    <Announcements/>
    <Ipfaq/>
    <End/>
    <img src={doge} className='doge'></img>
    <Legal/>
    <Sitemap/>
    <Found/>
    <div className='line'>
      <img src={map}></img>
      <hr></hr>
    </div>
    <div class='fotter'>
      <p>Contributers</p>
      <p>© 2013-2024 | The Dogecoin Foundation & Dogecoin Project. All rights reserved.</p>
    </div>
    </>
  );
}

export default App;





