import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Enterprise from './components/Services/Enterprise';
import University from './components/Services/University';
import Goberment from './components/Services/Goberment';
import Coursera from './components/Services/Coursera';
import Speex from './components/Services/Speex';
import Sence from './components/Services/Sence';
import Nosotros from './components/Services/Nosotros';
import Notice from './components/Services/Notice';
import NewsDetail from './components/Services/NewsDetail';
import { CountryProvider } from './components/CountryContext';
import WhatsappFloat from './components/ContactFloat';

import './App.css';
import './Web.css';

function App() {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false); 

  const openContactForm = () => setIsContactFormVisible(true);
  const closeContactForm = () => setIsContactFormVisible(false);

  return (
    <CountryProvider>
      <Router>
        <div className="App">
          <Header onWhatsappClick={openContactForm} />
          
          <Routes>
            <Route path="/" element={<Home openContactForm={openContactForm} />}/>
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/university" element={<University />} />
            <Route path="/goberment" element={<Goberment />} />
            <Route path="/coursera" element={<Coursera />} />
            <Route path="/speex" element={<Speex />} />
            <Route path="/sence" element={<Sence />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/noticia/:id" element={<NewsDetail />} />
          </Routes>

          <div className="container-wpp">
            <WhatsappFloat 
              isFormVisible={isContactFormVisible}
              openForm={openContactForm}
              closeForm={closeContactForm}
            />
          </div>
        </div>
      </Router>
    </CountryProvider>
  );
}

export default App;
