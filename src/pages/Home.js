// src/pages/Home.js






 /* return (
    <div className="home">
      
    </div>
  );*/


// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  // Array con las rutas de las imágenes para el carrusel
  const slides = [
    "/ImagenHome.jpg",  // Asegúrate de tener estas imágenes en la carpeta pública o en una ruta correcta
    "/imagenSlide2.jpg",
    "/imagenSlide3.jpg"
  ];
  const slideTexts = [
    "Líder en potenciar y desarrollar talento y competencias utilizando <span>IA</span>",
    "Aliados con las plataformas de <span>aprendizaje</span> más efectivas a nivel global",
    "Las mejores soluciones de <span>upskilling</span> y <span>reskilling</span> para tus colaboradores",
  ];

  // Estado para el índice del slide actual
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false); // Estado para saber si hemos hecho scroll

    // Función que se llama cada vez que el usuario hace scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);  // Si se hizo scroll hacia abajo más de 50px, mostramos el logo scroll
      } else {
        setScrolled(false); // Si estamos en la parte superior, mostramos el logo inicial
      }
    };
  
    // Usamos useEffect para agregar el listener de scroll cuando el componente se monta
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Limpiamos el event listener cuando el componente se desmonta
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  useEffect(() => {
    // Configuramos el intervalo para cambiar el slide cada 3 segundos
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 3000ms = 3 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home ${scrolled ? 'scrolled' : ''}`}>

      <div className="home-image">
        <div className='text-home'>
          <p>Somos Coursera y Speexx en LATAM</p>
        </div>
      </div>

      {scrolled && (
        <div className="carousel">
          <div className='section1'>
            <h3 dangerouslySetInnerHTML={{ __html: slideTexts[currentSlide] }} />
            <button
              type="button"
              class="btn btnSlide"
            >
              Descubre más
            </button>
            <div className="dots-container">
              {slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)} // Permite cambiar de slide al hacer clic en los círculos
              />
              ))}
            </div>
            
          </div>
          <div className="section2">
          <img src={slides[currentSlide]} alt="Slide" className="carousel-image" />
          </div>
        </div>
      )}
      
      {scrolled && (
         <div className="home-data">
         <i class="fa fa-chevron-left"></i>
         <div className="container-data data-uno">
           <p><span>+</span>882%</p>
           <p>de aumento en la inscripción de cursos relacionados a IA</p>
         </div>
         <div className="container-data data-dos">
           <p><span className="positive">+</span>5,4k</p>
           <p>de cursos y especializaciones disponibles</p>
         </div>
         <div className="container-data data-tres">
           <p><span className="negative">-</span>40%</p>
           <p>recursos de capacitación utilizados</p>
         </div>
         <i class="fa fa-chevron-right"></i>
       </div>
      )}
     
      
    </div>
  );
};

export default Home;





