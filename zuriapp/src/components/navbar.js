import React,  { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './modal'

export default function Navbar() {
    const {openModal, setOpenModal} = useState(false);
  return (
    <header>
            <div className="img_cont">
                <img alt='head_img' src={require('./assets/export13.png')}></img>
            </div>
            <nav>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/page'>Place to stay</NavLink>
               <NavLink to='/'>NFT</NavLink>
               <NavLink to='/'>Community</NavLink>
            </nav>
            <button 
                onClick={() => setOpenModal(true)}
                id='butn1'> Connect wallet
            </button>

            { openModal ? <Modal /> : console.log(openModal) }
        </header>
  )
}
