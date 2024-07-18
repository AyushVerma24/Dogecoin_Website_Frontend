import React from 'react'
function toggleCollapse() {
    const collapsible = document.getElementById('collapsible0');
    collapsible.classList.toggle('expanded');
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('down');
    arrow.classList.toggle('up');
}
function toggleCollapse1() {
    const collapsible = document.getElementById('collapsible1');
    collapsible.classList.toggle('expanded');
    const arrow = document.getElementById('arrow1');
    arrow.classList.toggle('down');
    arrow.classList.toggle('up');
}
function toggleCollapse2() {
    const collapsible = document.getElementById('collapsible2');
    collapsible.classList.toggle('expanded');
    const arrow = document.getElementById('arrow2');
    arrow.classList.toggle('down');
    arrow.classList.toggle('up');
}
function toggleCollapse3() {
    const collapsible = document.getElementById('collapsible3');
    collapsible.classList.toggle('expanded');
    const arrow = document.getElementById('arrow3');
    arrow.classList.toggle('down');
    arrow.classList.toggle('up');
}
function toggleCollapse4() {
    const collapsible = document.getElementById('collapsible4');
    collapsible.classList.toggle('expanded');
    const arrow = document.getElementById('arrow4');
    arrow.classList.toggle('down');
    arrow.classList.toggle('up');
}

function Btn() {
  return (
    <>
    <div className='container6'>
    
    <button className='btn' onClick={toggleCollapse}><span class="arrow" id="arrow">▼</span> A whale holds nearly 30% of Dogecoin supply! Is this true?</button>
      <div class="collapsible" id="collapsible0">
        <p>A common source of FUD surrounding Dogecoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called "whales". In reality, many of the top Dogecoin wallets are cold wallets or hot wallets controlled by ... <a href='#'>Read more</a>...</p>
    </div>
    <button className='btn' onClick={toggleCollapse1}><span class="arrow" id="arrow1">▼</span> Dogecoin has no utility!</button>
      <div class="collapsible" id="collapsible1">
        <p>Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is moneyl Indeed, Dogecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Dogecoin was first meant to be a joke and it served, and will serve, ... <a href='#'>Read more</a>...</p>
    </div>
    <button className='btn' onClick={toggleCollapse2}><span class="arrow" id="arrow2">▼</span> Can you put a cap on Dogecoin?</button>
      <div class="collapsible" id="collapsible2">
        <p>Right now, and for the next hundred years or so, Dogecoin operates like, and will continue to operate like, most other crypto assets. "Capped" assets are nowhere near mined out and will continue adding to their supply, just like Dogecoin, for the foreseeable future. Dogecoin's... <a href='#'>Read more</a>...</p>
    </div>
    <button className='btn' onClick={toggleCollapse3}><span class="arrow" id="arrow3">▼</span> Dogecoin and coin burning</button>
      <div className='btn' class="collapsible" id="collapsible3">
        <p>Dogecoin does not need coin burning marketing mechanisms that new tokens and other chains have attempted to implement to artificially inflate their prices Simplez</p>
    </div>
    <button className='btn' onClick={toggleCollapse4}><span class="arrow" id="arrow4">▼</span> Dogecoin has no developers!</button>
      <div class="collapsible" id="collapsible4">
        <p>A common source of FUD surrounding Dogecoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called "whales". In reality, many of the top Dogecoin wallets are cold wallets or hot wallets controlled by ... <a href='#'>Read more</a>...</p>
    </div>

    </div>
    </>
  )
}

export default Btn
