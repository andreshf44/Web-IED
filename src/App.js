import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Enterprise from './components/Services/Enterprise';
import University from './components/Services/University';
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
        </Routes>

        <div className='container-wpp'>
          <WhatsappFloat />
        </div>
      </div>
    </Router>
  );
}

export default App;

