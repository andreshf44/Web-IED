import Header from './components/Header';  // Importamos el Header
import Home from './pages/Home';  // Importamos Home 
import WhatsappFloat from './components/ContactFloat'; //Importartamos Whatsapp flotante
import './App.css';
import './Web.css';

function App() {
  return (
    <div className="App">
      <Header />  
      <Home />
      <div className='container-wpp'>
        <WhatsappFloat />
      </div>
      
    </div>
  );
}

export default App;
