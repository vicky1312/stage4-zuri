import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import './main.css'

function Main() {
    let navigate = useNavigate();
    const {openModal, setOpenModal} = useState(false)
  return (
    <>
        <header>
            <div id='head'>
                <div id='left'>
                    <img alt='head_img' id='firsticon' src={require('./assets/export13.png')}></img>
                </div>
                <div id='middle'>
                    <p onClick={() => {
                        navigate('/')
                    }} id='midpar'>Home</p>
                    <p onClick={() => {
                        navigate('/page')
                    }} id='midpar'>Place to stay</p>
                    <p id='midpar'>NFTs</p>
                    <p id='midpar'>Community</p>
                </div>
                    <button onClick={() => setOpenModal(true)} id='butn1'>Connect wallet</button>
                    <Modal isopen = {openModal}>
                        <h3>Connect Wallet</h3>
                        <h3>x</h3>
                    </Modal>
                
            </div>
        </header>

        <section id='sec1'>
            <div id='sec1left'>
                <h1>
                    Rent a <span id='sp1'>Place</span> away from <span id='sp1'>Home</span> in the <span id='sp1'>Metaverse</span>
                </h1>
                <p id='p1'>We provide you access to luxury and affordable houses in the metaverse,
                    get a chance to turn your imagination to reality at your comfort zone.
                </p>
                <div id='header_input'>
                    <label></label>
                    <input type='text' id='location' placeholder='search for location'>
                    </input>
                    <button id='srch'>Search</button>
                </div>
            </div>
            
            <div id='middlepics'>
                <img alt='middle' id='mid' src={require('./assets/midpic.png')}></img>
            </div>

        </section>
        <div id='midsection'>
            <img alt='midsec' id='midsecpic1' src={require('./assets/expng1.png')}></img>
            <img alt='midsec' id='midsecpic2' src={require('./assets/expng2.png')}></img>
            <img alt='midsec' id='midsecpic3' src={require('./assets/expng3.png')}></img>
        </div>

        <section id='sec2'>
            <h2 id='sec2head'>Inspiration for your next adventure</h2>
            <div id='sec2pics'>
                <div id='firstpart'>
                    <div id='tablet'>
                        <div id='tcol1'>
                            <img alt='sec2pic' id='tablepic' src={require('./assets/table1.png')}></img>

                            <div id='tablecont'>
                                <div id='tbcontpic1'>
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                    <img alt='stars' id='star' src={require('./assets/stars.png')}></img>
                                </div>
                                <div id='tbcontpic1-2'>
                                    <h5>1MBT per night</h5>
                                    <p>available for 2 weeks stay</p>
                                </div>
                            </div>
                        </div>

                        <div id='tcol2'>
                            <img alt='sec2pic' id='tablepic1' src={require('./assets/table2.png')}></img>
                            <div id='tablecont'>
                                <div id='tbcontpic1'>
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                    <img alt='stars' id='star' src={require('./assets/stars.png')}></img>
                                </div>
                                <div id='tbcontpic1-2'>
                                    <h5>1MBT per night</h5>
                                    <p>available for 2 weeks stay</p>
                                </div>
                            </div>    
                        </div>

                    </div>

                    <div id='tablet1'>
                        <div id='tcol3'>
                            <img alt='sec2pic' id='tablepic1' src={require('./assets/table3.png')}></img>

                            <div id='tablecont'>
                                <div id='tbcontpic1'>
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                    <img alt='stars' id='star' src={require('./assets/stars.png')}></img>
                                </div>
                                <div id='tbcontpic1-2'>
                                    <h5>1MBT per night</h5>
                                    <p>available for 2 weeks stay</p>
                                </div>
                            </div>
                        </div>

                        <div id='tcol4'>
                            <img alt='sec2pic' id='tablepic1' src={require('./assets/table4.png')}></img>

                            <div id='tablecont'>
                                <div id='tbcontpic1'>
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                    <img alt='stars' id='star' src={require('./assets/stars.png')}></img>
                                </div>
                                <div id='tbcontpic1-2'>
                                    <h5>1MBT per night</h5>
                                    <p>available for 2 weeks stay</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>    
                <div id='tablet2'>
                    <div id='secondrow'>
                        <div id='tcol5'>
                            <img alt='sec2pic' id='tablepic1' src={require('./assets/table5.png')}></img>

                            <div id='tablecont'>
                                <div id='tbcontpic1'>
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                    <img alt='stars' id='star' src={require('./assets/stars.png')}></img>
                                </div>
                                <div id='tbcontpic1-2'>
                                    <h5>1MBT per night</h5>
                                    <p>available for 2 weeks stay</p>
                                </div>
                            </div>
                        </div>

                        <div id='tcol6'>
                            <img alt='sec2pic' id='tablepic1' src={require('./assets/table6.png')}></img>
                            <div id='tablecont'>
                                <div id='tbcontpic1'>
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                    <img alt='stars' id='star' src={require('./assets/stars.png')}></img>
                                </div>
                                <div id='tbcontpic1-2'>
                                    <h5>1MBT per night</h5>
                                    <p>available for 2 weeks stay</p>
                                </div>
                            </div>    
                        </div>
                    </div>  

                <div id='tablet3'>
                    <div id='tcol7'>
                        <img alt='sec2pic' id='tablepic1' src={require('./assets/table7.png')}></img>

                        <div id='tablecont'>
                            <div id='tbcontpic1'>
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img alt='stars' id='star' src={require('./assets/stars.png')}></img>
                            </div>
                            <div id='tbcontpic1-2'>
                                <h5>1MBT per night</h5>
                                <p>available for 2 weeks stay</p>
                            </div>
                        </div>
                    </div>

                    <div id='tcol8'>
                        <img alt='sec2pic' id='tablepic1' src={require('./assets/table8.png')}></img>

                        <div id='tablecont'>
                            <div id='tbcontpic1'>
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img alt='stars' id='star' src={require('./assets/stars.png')}></img>
                            </div>
                            <div id='tbcontpic1-2'>
                                <h5>1MBT per night</h5>
                                <p>available for 2 weeks stay</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        
            
        </section>

        <section id='sec3'>
            <div id='leftcontent'>
                <h2 id='sec3head'>Metabnb NFTs</h2>
                <p id='headpara'>Discover our NFT giftcard collection. Loyal customers gets amazing giftcards which are traded as NFTs.
                    These NFTs gives our customer access to loads of our exclusive services.
                </p>
                <button id='butn2'>Learn more</button>
            </div>
            <div id='rightcontent'>
                <img alt='sec3pic' id='sec3pics' src={require('./assets/sec3img.png')}></img>
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
    </>
  )
}

export default Main
