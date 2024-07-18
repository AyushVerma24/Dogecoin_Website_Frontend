import '../App.css'
import d1 from '../dogecoin-logo.png'
import b from '../images.png'
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function Navbar()
{
return (
<ul>
  <li><img src={d1}></img></li>
  <li><a href="#home">So home?</a></li>
  <li><a href="#news">What is Dogecoin?</a></li>
  <li><a href="#contact">Much Wallets</a></li>
  <li><a href="#about">Very Community</a></li>
  <li><a href="#about dropbtn">So Dogepedia</a></li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">So Dogepedia</a>
    <div class="dropdown-content">
      <a href="#">Documentation</a>
      <a href="#">FAQ</a>
      <a href="#">How Tos</a>
      <a href='#'>Resources</a>
      <a href="#">DogecoinSwag</a>
    </div>
  </li>
  <li><li1><img src={b} onClick={myFunction}></img></li1></li>
  <li>
  <div class="select">
    <span class="select__flag" aria-hidden="true"></span>
    <select class="select__input" name="country-selector" id="country-selector">
      <option value="0">Select Country</option>
      <option value="FR">FR</option>
      <option value="DE">DE</option>
      <option value="CN">ZH-CN</option>
      <option value="TW">ZH-TW</option>
      <option value="PT">PT-PT</option>
      <option value="NO">NO</option>
      <option value="TH">TH</option>
      <option value="ES">ES</option>
    </select> 
    <svg class="select__arrow" aria-hidden="true" viewBox="0 0 16 16"><polyline points="3.5,6.5 8,11 12.5,6.5" stroke-width="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
  </div>
  </li>
</ul>
);
}
export default Navbar;