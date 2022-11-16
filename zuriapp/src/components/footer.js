import React from 'react'

function Footer() {
  return (
    <footer>
    <div id='foot1'>
        <img alt='footpic' id='footpic' src={require('./assets/footerpic.png')}></img>
        <div id='socials'>
            <img alt='face' id='facebook' src={require('./assets/facebook.png')}></img>
            <img alt='insta' id='instagram' src={require('./assets/instagram.png')}></img>
            <img alt='twit' id='twitter' src={require('./assets/twitter.png')}></img>
        </div>

        <div id='copy'>
            <p id='footpar'>
            <span>&copy;</span> 2022 Metabnb
            </p>
        </div>
    </div>

    <div id='foot2'>
        <h4>Community</h4>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
    </div>

    <div id='foot3'>
        <h4>Places</h4>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p id='footpar'>Learn more</p>
    </div>

    <div className='foot4' id='foot4'>
        <h4>About us</h4>
        <p id='footpar'>Road map</p>
        <p id='footpar'>Creators</p>
        <p id='footpar'>Career</p>
        <p id='footpar'>Contact us</p>
    </div>
</footer>
  )
}

export default Footer