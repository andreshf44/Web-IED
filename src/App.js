import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Enterprise from './components/Services/Enterprise';
import University from './components/Services/University';
import Goberment from './components/Services/Goberment';
import Coursera from './components/Services/Coursera';
import Speex from './components/Services/Speex';
import Sence from './components/Services/Sence';
import Nosotros from './components/Services/Nosotros';
import WhatsappFloat from './components/ContactFloat';

import './App.css';
import './Web.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/university" element={<University />} />
          <Route path="/goberment" element={<Goberment />} />
          <Route path="/coursera" element={<Coursera />} />
          <Route path="/speex" element={<Speex />} />
          <Route path="/sence" element={<Sence />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>

        <div className='container-wpp'>
          <WhatsappFloat />
        </div>
      </div>
    </Router>
  );
}

export default App;

