import { useNavigate } from 'react-router-dom';
import './page.css'

function Page() {
    let navigate = useNavigate();
  return (
    <>
        <header id='heads'>
            <div id='head'>
                <div id='left'>
                    <img alt='head_img' id='firsticon' src={require('./assets/export13.png')}></img>
                </div>
                <div id='middles'>
                    <p onClick={() => {
                        navigate('/')
                    }} id='midpara'>Home</p>
                    <p onClick={() => {
                        navigate('/page')
                    }} id='midpara'>Place to stay</p>
                    <p id='midpara'>NFTs</p>
                    <p id='midpara'>Community</p>
                <div id='modal'>
                    <button id='butn'>Connect wallet</button>
                </div>    
                
                </div>
            </div>    

                
        </header>

        <div id='header2'>
            <p id='headpar'>restaurant</p>
            <p id='headpar'>Cottage</p>
            <p id='headpar'>Castle</p>
            <p id='headpar'>fantastic city</p>
            <p id='headpar'>beach</p>
            <p id='headpar'>Cabins</p>
            <p id='headpar'>Off-grid</p>
            <p id='headpar'>Farm</p>
            <label></label>
            <select id='input' name='location'>
                <option value='location'>Location</option>
            </select>
        </div>
        
        <section id='midp'>
            <div id='desktop'>
                <img alt='desk' id='frame' src={require('./assets/Frame.png')}></img>
            </div>
            <div id='tablet'>
                <div id='row'>
                    <div id='row1'>
                        <img alt='tab' id='tab' src={require('./assets/frame2.png')}></img>
                    </div>
                    
                    <div id='row2'>
                        <img alt='tab' id='tab2' src={require('./assets/frame3.png')}></img>
                    </div>
                </div>

                <div id='row'>
                    <div id='row1'>
                        <img alt='tab' id='tab' src={require('./assets/frame4.png')}></img>
                    </div>
                    
                    <div id='row2'>
                        <img alt='tab' id='tab2' src={require('./assets/frame5.png')}></img>
                    </div>
                </div>

                <div id='row'>
                    <div id='row1'>
                        <img alt='tab' id='tab' src={require('./assets/frame6.png')}></img>
                    </div>
                    
                    <div id='row2'>
                        <img alt='tab' id='tab2' src={require('./assets/frame7.png')}></img>
                    </div>
                </div>


                <div id='row'>
                    <div id='row1'>
                        <img alt='tab' id='tab' src={require('./assets/frame8.png')}></img>
                    </div>
                    <div id='row2'>
                        <img alt='tab' id='tab2' src={require('./assets/frame9.png')}></img>
                    </div>
                    
                </div>

                <div id='row'>
                    <div id='row1'>
                        <img alt='tab' id='tab' src={require('./assets/frame10.png')}></img>
                    </div>
                    <div id='row2'>
                        <img alt='tab' id='tab2' src={require('./assets/frame11.png')}></img>
                    </div>
                    
                </div>

                <div id='row'>
                    <div id='row1'>
                        <img alt='tab' id='tab' src={require('./assets/frame12.png')}></img>
                    </div>
                   <div id='row2'>
                        <img alt='tab' id='tab2' src={require('./assets/frame13.png')}></img>
                   </div>
                    
                </div>

                <div id='row'>
                    <div id='row1'>
                        <img alt='tab' id='tab' src={require('./assets/frame14.png')}></img>
                    </div>
                    <div id='row2'>
                        <img alt='tab' id='tab2' src={require('./assets/frame15.png')}></img>
                    </div>

                </div>

                <div id='row'>
                    <div id='row1'>
                        <img alt='tab' id='tab' src={require('./assets/frame16.png')}></img>
                    </div>
                    <div id='row2'>
                        <img alt='tab' id='tab2' src={require('./assets/frame17.png')}></img>
                    </div>
                    
                </div>
            </div>
                
        </section>
        
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
                        <span>&copy</span> 2022 Metabnb
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
                    <p>Learn more</p>
                </div>

                <div id='foot4'>
                    <h4>About us</h4>
                    <p>Road map</p>
                    <p>Creators</p>
                    <p>Career</p>
                    <p>Contact us</p>
                </div>
        
            
        </footer>
    </>
  )
}

export default Page
