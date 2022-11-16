import React, { useState } from 'react'
import './main.css'
import Navbar from './navbar'
import Footer from './footer'

function Main() {
  return (
    <main>

        {/* Yeapi, the general header... */}
        <Navbar />

        <section id='act_main'>
            <section id='sec1'>
                <div id='sec1left'>
                    <h1>
                        Rent a <span className='sp1'>Place</span> away from <span className='sp1'>Home</span> in the <span className='sp1'>Metaverse</span>
                    </h1>
                    <p id='p1'>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.
                    </p>
                    <div id='header_input'>
                        <input type='text' id='location' placeholder='search for location'>
                        </input>
                        <button id='srch'>Search</button>
                    </div>
                </div>
                <div id='middlepics'>
                    <img alt='middle' id='mid' src={require('./assets/midpic.png')} />
                </div>
            </section>

            <div id='midsection'>
                <div className="inner_cont">
                    <img alt='midsec' id='midsecpic1' src={require('./assets/expng1.png')} />
                    <img alt='midsec' id='midsecpic2' src={require('./assets/expng2.png')} />
                    <img alt='midsec' id='midsecpic3' src={require('./assets/expng3.png')} />
                </div>
            </div>

            <section id='sec2'>
                <h2>Inspiration for your next adventure</h2>
                <div id='sec2pics'>
                    <div className='card'>
                        <div className="img_cont">
                            <img alt='sec2pic' src={require('./assets/table1.png')}></img>
                        </div>
                        <div className='first_row'>
                            <p>Desert king</p>
                            <b>1MBT per night</b>
                        </div>
                        <div className='sec_row'>
                            <p>2345km away</p>
                            <p>available for 2 weeks stay</p>
                        </div>
                        <img alt='stars' src={require('./assets/stars.png')} />
                    </div>
                    <div className='card'>
                        <div className="img_cont">
                            <img alt='sec2pic' src={require('./assets/table2.png')}></img>
                        </div>
                        <div className='first_row'>
                            <p>Desert king</p>
                            <b>1MBT per night</b>
                        </div>
                        <div className='sec_row'>
                            <p>2345km away</p>
                            <p>available for 2 weeks stay</p>
                        </div>
                        <img alt='stars' src={require('./assets/stars.png')} />
                    </div>
                    <div className='card'>
                        <div className="img_cont">
                            <img alt='sec2pic' src={require('./assets/table3.png')}></img>
                        </div>
                        <div className='first_row'>
                            <p>Desert king</p>
                            <b>1MBT per night</b>
                        </div>
                        <div className='sec_row'>
                            <p>2345km away</p>
                            <p>available for 2 weeks stay</p>
                        </div>
                        <img alt='stars' src={require('./assets/stars.png')} />
                    </div>
                    <div className='card'>
                        <div className="img_cont">
                            <img alt='sec2pic' src={require('./assets/table1.png')}></img>
                        </div>
                        <div className='first_row'>
                            <p>Desert king</p>
                            <b>1MBT per night</b>
                        </div>
                        <div className='sec_row'>
                            <p>2345km away</p>
                            <p>available for 2 weeks stay</p>
                        </div>
                        <img alt='stars' src={require('./assets/stars.png')} />
                    </div>
                    <div className='card'>
                        <div className="img_cont">
                            <img alt='sec2pic' src={require('./assets/table4.png')}></img>
                        </div>
                        <div className='first_row'>
                            <p>Desert king</p>
                            <b>1MBT per night</b>
                        </div>
                        <div className='sec_row'>
                            <p>2345km away</p>
                            <p>available for 2 weeks stay</p>
                        </div>
                        <img alt='stars' src={require('./assets/stars.png')} />
                    </div>
                    <div className='card'>
                        <div className="img_cont">
                            <img alt='sec2pic' src={require('./assets/table5.png')}></img>
                        </div>
                        <div className='first_row'>
                            <p>Desert king</p>
                            <b>1MBT per night</b>
                        </div>
                        <div className='sec_row'>
                            <p>2345km away</p>
                            <p>available for 2 weeks stay</p>
                        </div>
                        <img alt='stars' src={require('./assets/stars.png')} />
                    </div>
                    <div className='card'>
                        <div className="img_cont">
                            <img alt='sec2pic' src={require('./assets/table6.png')}></img>
                        </div>
                        <div className='first_row'>
                            <p>Desert king</p>
                            <b>1MBT per night</b>
                        </div>
                        <div className='sec_row'>
                            <p>2345km away</p>
                            <p>available for 2 weeks stay</p>
                        </div>
                        <img alt='stars' src={require('./assets/stars.png')} />
                    </div>
                    <div className='card'>
                        <div className="img_cont">
                            <img alt='sec2pic' src={require('./assets/table7.png')}></img>
                        </div>
                        <div className='first_row'>
                            <p>Desert king</p>
                            <b>1MBT per night</b>
                        </div>
                        <div className='sec_row'>
                            <p>2345km away</p>
                            <p>available for 2 weeks stay</p>
                        </div>
                        <img alt='stars' src={require('./assets/stars.png')} />
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
        </section>

        {/* general footer */}
        <Footer />
       
    </main>
  )
}

export default Main
