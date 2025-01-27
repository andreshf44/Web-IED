// src/pages/Home.js
import React, { useState } from 'react';
import './Home.css';  // Asegúrate de que los estilos estén en el archivo Home.css

const Home = () => {
  // Inicializa expandedIndex con 0 para que el primer elemento (Empresas) tenga la clase "expanded" por defecto
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setExpandedIndex(index);
  };

  return (
    <div className="home">
      <div className="home-image">
        {/* La imagen se establece mediante CSS */}
      </div>
      <div className="container-content">
        <div 
          className={`servicio empresas ${expandedIndex === 0 ? 'expanded' : ''}`} 
          onMouseEnter={() => handleMouseEnter(0)} 
        >
          <h1>Empresas</h1>
          <p>En un mundo empresarial en constante evolución, la capacitación continua 
            es la clave para mantener a tu equipo competitivo, motivado y preparado 
            para afrontar los desafíos del mañana. Nuestro servicio educativo para empresas 
            está diseñado para ofrecer soluciones de formación a medida, impulsando el rendimiento 
            y desarrollo de tu organización.
          </p>
          <button>Saber más</button>
        </div>
        <div 
          className={`servicio universidades ${expandedIndex === 1 ? 'expanded' : ''}`} 
          onMouseEnter={() => handleMouseEnter(1)} 
        >
          <h1>Universidades</h1>
          <p>En un mundo académico que avanza rápidamente, las universidades tienen la 
            responsabilidad de preparar a los estudiantes para los desafíos globales y 
            profesionales del futuro. Nuestro servicio educativo para universidades ofrece 
            soluciones de formación personalizadas, diseñadas para enriquecer la experiencia 
            educativa de estudiantes y docentes, impulsar la innovación en la enseñanza y mejorar 
            los resultados académicos.
          </p>
          <button>Saber más</button>
        </div>
        <div 
          className={`servicio gobierno ${expandedIndex === 2 ? 'expanded' : ''}`} 
          onMouseEnter={() => handleMouseEnter(2)} 
        >
          <h1>Gobierno</h1>
          <p>En un entorno gubernamental en constante cambio, la capacitación y el desarrollo 
            del personal son fundamentales para garantizar una gestión eficiente, una toma de 
            decisiones informada y una mayor calidad en los servicios públicos. Nuestro servicio 
            educativo para el gobierno está diseñado para proporcionar soluciones de formación que 
            fortalezcan las capacidades de los empleados públicos, mejoren la gestión administrativa y
            contribuyan a la innovación en la administración pública.
          </p>
          <button>Saber más</button>
        </div>
      </div>
    </div>
  );
};

export default Home;


