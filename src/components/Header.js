import React, { useState, useEffect } from 'react';
import './Components.css';  // Importamos los estilos de Header

const Header = () => {
  const [scrolled, setScrolled] = useState(false); // Estado para saber si hemos hecho scroll
  const [selectedService, setSelectedService] = useState(null); // Estado para almacenar el servicio seleccionado
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Estado para controlar la visibilidad del menu
  const [activeService, setActiveService] = useState(null); // Para gestionar el servicio activo
   const [activeMenuItem, setActiveMenuItem] = useState(null);

  // Datos de los servicios
  
  const services = [
    {
      id: 1,
      name: 'Coursera',
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column">
              <h4>Para Empresas</h4>
              <ul>
                <li>Generative AI Academy</li>
                <li>Academia de Marketing</li>
                <li>Academia de Finanzas</li>
                <li>Academia de Datos</li>
                <li>Academia de Tecnoloía</li>
              </ul>
              <a href="#vermas1" className="ver-mas-link">
                Ver más <span>&#8594;</span> {/* Flecha hacia la derecha */}
              </a>
            </div>
            {/* Columna 2 */}
            <div className="column">
              <h4>Para Universidades</h4>
              <ul>
                <li>Generative AI Coursera</li>
                <li>Academic Integrity</li>
                <li>Certificados Profesionales</li>
              </ul>
              <a href="#vermas2" className="ver-mas-link">
                Ver más <span>&#8594;</span>
              </a>
            </div>
            {/* Columna 3 */}
            <div className="column">
              <h4>Para Gobierno</h4>
              <ul>
                <li>Career Academy</li>
                <li>Academia de Datos</li>
                <li>Academia de Tecnología</li>
                <li>Academia de Liderazgos</li>
              </ul>
              <a href="#vermas3" className="ver-mas-link">
                Ver más <span>&#8594;</span>
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 1,
      name: 'Speex',
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column">
              <h4>Core</h4>
              <p>Descripción breve</p>
              <a href="#vermas1" className="ver-mas-link">
                Ver más <span>&#8594;</span> {/* Flecha hacia la derecha */}
              </a>
            </div>
            {/* Columna 2 */}
            <div className="column">
              <h4>Smart</h4>
              <p>Descripción breve</p>
              <a href="#vermas2" className="ver-mas-link">
                Ver más <span>&#8594;</span>
              </a>
            </div>
            {/* Columna 3 */}
            <div className="column">
              <h4>Expert</h4>
              <p>Descripción breve</p>
              <a href="#vermas3" className="ver-mas-link">
                Ver más <span>&#8594;</span>
              </a>
            </div>
            {/* Columna 4 */}
            <div className="column">
              <h4>Expert Pro</h4>
              <p>Descripción breve</p>
              <a href="#vermas3" className="ver-mas-link">
                Ver más <span>&#8594;</span>
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      name: 'Negocios',
      description: (
        <>
          <div className="columns-container">
            <div className="column">
              <span>Course builder</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>Integraciones</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>LevelSets</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>SkillSets</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>Panel de habilidades</span>
              <p> Descripción breve</p>
            </div>
           
          </div>
          <a href="#vermas" className="ver-mas-link">
              Ver más <span>&#8594;</span>
          </a>
        </>
      ),
    },
    {
      id: 2,
      name: 'Universidades',
      description: (
        <>
          <div className="columns-container">
            <div className="column">
              <span>Course builder</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>Integraciones</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>LevelSets</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>SkillSets</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>Panel de habilidades</span>
              <p> Descripción breve</p>
            </div>
           
          </div>
          <a href="#vermas" className="ver-mas-link">
              Ver más <span>&#8594;</span>
          </a>
        </>
      ),
    },
    {
      id: 2,
      name: 'Gobierno',
      description: (
        <>
          <div className="columns-container">
            <div className="column">
              <span>Course builder</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>Integraciones</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>LevelSets</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>SkillSets</span>
              <p> Descripción breve</p>
            </div>
            <div className="column">
              <span>Panel de habilidades</span>
              <p> Descripción breve</p>
            </div>
           
          </div>
          <a href="#vermas" className="ver-mas-link">
              Ver más <span>&#8594;</span>
          </a>
        </>
      ),
    },
    {
      id: 3,
      name: 'Nosotros',
      description: (
        <>
          <div className="columns-container">
            <p>
              texto
            </p>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: 'Noticias',
      description: (
        <>
          <div className="columns-container">
            <p>
              texto
            </p>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: 'Contáctanos',
      description: (
        <>
          <div className="columns-container">
            <p>
              texto
            </p>
          </div>
        </>
      ),
    },
  ];

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

  // Función para actualizar el servicio seleccionado
  const handleServiceClick = (service) => {
    setSelectedService(service);  // Actualiza el servicio seleccionado
    setActiveService(service.name); // Marca el servicio como activo
  };

  // Función para manejar el mouse enter
  const handleMouseEnter = (menuId) => {
    setActiveMenuItem(menuId); // Establece el id del menú que está activo
    setIsMenuVisible(true);
    setSelectedService(null); 
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);  // Ocultar el submenú al quitar el ratón
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuVisible ? 'visible' : ''}`}
    onMouseLeave={handleMouseLeave}
    >

      <div className="logo-container">
        {/* Cambiamos la imagen según el estado del scroll */}
        <img 
          src={scrolled ? "/logo-scroll.png" : "/logo-first.png"} 
          alt="Logo" 
          className="logo" 
        />
      </div>

      {scrolled && (  // Solo mostramos el menú cuando hay scroll
        <nav className="navbar">
          <ul>
            <li 
               className={`nav-item ${activeMenuItem === 1 ? 'active' : ''}`} 
              onMouseEnter={() => handleMouseEnter(1)}
            ><a href="#servicios">Productos</a>
            </li>
            <li
                className={`nav-item ${activeMenuItem === 2 ? 'active' : ''}`} 
               onMouseEnter={() => handleMouseEnter(2)}
            ><a href="#paises">Soluciones</a>
            </li>
            <li
               className={`nav-item ${activeMenuItem === 3 ? 'active' : ''}`} 
              onMouseEnter={() => handleMouseEnter(3)}
            ><a href="#mas">Más</a></li>
          </ul>
        </nav>
      )}

      {/* Contenedor para las dos columnas */}
      <div className="container-menu">
        <div className="option-menu">
          <ul>
            {services.map((service) => (
              <li className={`${service.id} ${activeMenuItem === service.id ? 'active' : ''}`} 
              key={service.id}>
                <a 
                 onClick={() => handleServiceClick(service)}
                 className={activeService === service.name ? 'active' : ''} // Agrega la clase 'active'
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-option">
          {selectedService ? (
            <>
              <h3>{selectedService.name}</h3>
              <p>{selectedService.description}</p>
            </>
          ) : (
            <p>Selecciona una opción para ver más detalles.</p>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
