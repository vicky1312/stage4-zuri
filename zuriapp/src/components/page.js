import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';
import './main.css'

function Page() {
    let navigate = useNavigate();
  return (
    <main>
        <Navbar/>

        <div id='selection'>
            <ul>
                <li>Restaurant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>Fantastic city</li>
                <li>Beach</li>
                <li>Cabins</li>
                <li>Off-grid</li>
                <li>Farm</li>
                <select id='input' name='location'>
                    <option value='location'>Location</option>
                </select>
            </ul>
        </div>
        
        <div className='scam'>
             <img alt='middle' id='mid' src={require('./assets/Frame.png')} />
        </div>

        
        <Footer />
    </main>
  )
}

export default Page
