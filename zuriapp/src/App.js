import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './components/main.js'
import Page from './components/page.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Main />} />
        <Route path="/page" element = {<Page />} />
      </Routes>
    </Router>

  );
}

export default App;
