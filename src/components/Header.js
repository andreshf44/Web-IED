import React, { useState, useEffect } from 'react';
import './Components.css';  // Importamos los estilos de Header
import { ReactComponent as ChevronDown } from '../assets/chevron-down.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false); // Estado para saber si hemos hecho scroll
  const [selectedService, setSelectedService] = useState(null); // Estado para almacenar el servicio seleccionado
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Estado para controlar la visibilidad del menu
  const [activeService, setActiveService] = useState(null); // Para gestionar el servicio activo
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isCountriesVisible, setIsCountriesVisible] = useState(false);// Estado para manejar la visibilidad de la lista de países
  const [selectedCountry, setSelectedCountry] = useState(""); // Estado para el país seleccionado


  // Datos de los servicios
  
  const services = [
    {
      id: 1,
      name: 'Beneficios',
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column beneficios">
              <h4>Mejora las habilidades en cualquier puesto y prospera al enfrentar el cambio</h4>
              <p>Prepara a tus empleados para la IA generativa y otras clases de aceleración 
                tecnológica con habilidades alineadas con el trabajo, perspectivas basadas en datos, 
                y contenido y credenciales confiables.</p>
              <ul>
                <li>Cierra brechas en las habilidades</li>
                <li>Desarrolla los talentos</li>
                <li>Conserva los talentos</li>
                <li>Vuelve a capacitar a los talentos</li>
              </ul>
              <a href="#vermas1" className="ver-mas-link">
                Ver más <span>&#8594;</span> {/* Flecha hacia la derecha */}
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 1,
      name: 'Soluciones',
      description: (
        <>
          <div className="columns-container soluciones-empresa">
            <div className="column">
              <span>Generative AI Academy</span>
              <p>Desarrolle habilidades de IA en toda su organización</p>
            </div>
            <div className="column">
              <span>Academia de Dato</span>
              <p>Permite a tus empleados tomar decisiones e innovar</p>
            </div>
            <div className="column">
              <span>Academia de Tecnología</span>
              <p>Impulse la transformación tecnológica de su empresa</p>
            </div>
            <div className="column">
              <span>Academia de Marketing</span>
              <p>Aprende las más recientes skills de marketing digital</p>
            </div>
            <div className="column">
              <span>Career Academy</span>
              <p>Preparación para puestos de gran demanda</p>
            </div>
            <div className="column">
              <span>Speex</span>
              <p>La solución más efectiva para aprender inglés</p>
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
      name: 'Beneficios',
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column beneficios universidades">
              <h4>Fortalece la inserción laboral para atraer a un mayor número de estudiantes</h4>
              <p>Capacita a los estudiantes con las habilidades más demandadas y prepáralos para 
                alcanzar el éxito en el mundo laboral.</p>
              <ul>
                <li>Vincula planes de estudios a carreras profesionales</li>
                <li>Mejora los resultados laborales</li>
                <li>Mejora las experiencias de aprendizajes</li>
                <li>Contenido de nivel mundial</li>
              </ul>
              <a href="#vermas1" className="ver-mas-link">
                Ver más <span>&#8594;</span> {/* Flecha hacia la derecha */}
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      name: 'Soluciones',
      description: (
        <>
          <div className="columns-container soluciones-universidades">
            <div className="column">
              <span>Generative AI Courses</span>
              <p>Desarrolle habilidades de IA en toda su institución</p>
            </div>
            <div className="column">
              <span>Course Builder</span>
              <p> Genere y escale contenido personalizado</p>
            </div>
            <div className="column">
              <span>Integridad Académica</span>
              <p>Eleve la integridad en sus experiencias de aprendizaje</p>
            </div>
            <div className="column">
              <span>Certificados profesionales</span>
              <p>Ofrece microcredenciales de empresas líderes</p>
            </div>
            <div className="column">
              <span>Career Academy</span>
              <p>Prepare estudiantes para puestos de gran demanda</p>
            </div>
            <div className="column">
              <span>Speex</span>
              <p>La solución más efectiva para aprender inglés</p>
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
      name: 'Beneficios',
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column beneficios gobierno">
              <h4>Fortalece la inserción laboral para atraer a un mayor número de estudiantes</h4>
              <p>Capacita a los estudiantes con las habilidades más demandadas y prepáralos para 
                alcanzar el éxito en el mundo laboral.</p>
              <ul>
                <li>Vincula planes de estudios a carreras profesionales</li>
                <li>Mejora los resultados laborales</li>
                <li>Mejora las experiencias de aprendizajes</li>
                <li>Contenido de nivel mundial</li>
              </ul>
              <a href="#vermas1" className="ver-mas-link">
                Ver más <span>&#8594;</span> {/* Flecha hacia la derecha */}
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: 'Soluciones',
      description: (
        <>
          <div className="columns-container soluciones-gobierno">
            <div className="column">
              <span>Career Academy</span>
              <p>Prepare usuarios para puestos de gran demanda</p>
            </div>
            <div className="column">
              <span>Academia de Datos</span>
              <p>Permite a tus empleados tomar decisiones e innovar</p>
            </div>
            <div className="column">
              <span>Academia de Tecnología</span>
              <p>Impulse la transformación digital</p>
            </div>
            <div className="column">
              <span>Academia de liderazgo</span>
              <p>Impulsa tu fuerza de trabajo para liderar mejor</p>
            </div>
            <div className="column">
              <span>Speex</span>
              <p>La solución más efectiva para aprender inglés</p>
            </div>
          </div>
          <a href="#vermas" className="ver-mas-link">
              Ver más <span>&#8594;</span>
          </a>
        </>
      ),
    },
    {
      id: 4,
      name: 'Coursera',
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column coursera">
              <h4>Para empresas</h4>
              <ul>
                <li>Generative AI Academy</li>
                <li>Academia de marketing</li>
                <li>Academia de finanzas</li>
                <li>Academia de datos</li>
                <li>Academia de tecnoloía</li>
              </ul>
              <a href="#vermas1" className="ver-mas-link">
                Ver más <span>&#8594;</span> {/* Flecha hacia la derecha */}
              </a>
            </div>
            {/* Columna 2 */}
            <div className="column coursera">
              <h4>Para universidades</h4>
              <ul>
                <li>Generative AI Coursera</li>
                <li>Academic integrity</li>
                <li>Certificados profesionales</li>
              </ul>
              <a href="#vermas2" className="ver-mas-link">
                Ver más <span>&#8594;</span>
              </a>
            </div>
            {/* Columna 3 */}
            <div className="column coursera">
              <h4>Para gobierno</h4>
              <ul>
                <li>Career Academy</li>
                <li>Academia de datos</li>
                <li>Academia de tecnología</li>
                <li>Academia de liderazgos</li>
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
      id: 4,
      name: 'Speex',
      description: (
        <>
          <div className="columns-container">
            {/* Columna 1 */}
            <div className="column speex">
              <h4>Core</h4>
              <p>El plan más esencial y básico para iniciar el aprendizaje de idiomas</p>
            </div>
            {/* Columna 2 */}
            <div className="column speex">
              <h4>Smart</h4>
              <p>Fortalece tus habilidades con sesiones grupales en vivo</p>
            </div>
            {/* Columna 3 */}
            <div className="column speex">
              <h4>Expert</h4>
              <p>Participa de laboratorios y recibe asesoría de un coach especializado</p>
            </div>
            {/* Columna 4 */}
            <div className="column speex">
              <h4>Expert Pro</h4>
              <p>Participa de sesiones en vivo 1:1 y recibe asesoría y soporte constante</p>
            </div>
            <a href="#vermas" className="ver-mas-link">
                Ver más <span>&#8594;</span>
            </a>
          </div>
        </>
      ),
    },
    {
      id: 5,
      name: 'Nosotros',
      description: (
        <>
          <div className="columns-container">
            <div className="column nosotros">
            <h4>Líderes en potenciar y desarrollar talento y competencias utilizando IA</h4>
            <p>
            Nos asociamos con las mejores plataformas de aprendizaje del mundo para poder 
            llevarte el mejor y más actualizado contenido con el fin de desarrollar las 
            habilidades estratégicas que necesitas para enfrentar el futuro del mundo laboral.
            </p>
            </div>
          </div>
          <a href="#vermas1" className="ver-mas-link">
                Ver más <span>&#8594;</span> {/* Flecha hacia la derecha */}
          </a>
        </>
      ),
    },
    {
      id: 5,
      name: 'Noticias',
      description: (
        <>
          <div className="columns-container">
           
          </div>
        </>
      ),
    },
    {
      id: 5,
      name: 'Contáctanos',
      description: (
        <>
          <div className="columns-container">
           
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

  // Función para alternar la visibilidad de la lista de países
  const toggleCountriesList = () => {
    setIsCountriesVisible(!isCountriesVisible);
  };

  // Función para manejar la selección de un país
  const handleCountrySelect = (country, countryCode) => {
    setSelectedCountry(countryCode);  // Cambiar el estado con el código del país (ej. "CL")
    setIsCountriesVisible(false); // Ocultar la lista después de la selección
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuVisible ? 'visible' : ''}`}
    onMouseLeave={handleMouseLeave}
    >

      <div className="logo-container">
        {/* Cambiamos la imagen según el estado del scroll */}
        <img 
          src={scrolled ? "/logo-scroll.png" : "/logo-scroll.png"} 
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
            ><a href="#servicios">
                <span>Para</span>
                <span className='name-item'>
                  Empresas
                  <ChevronDown/>
                </span>
              </a>
            </li>
            <li 
               className={`nav-item ${activeMenuItem === 2 ? 'active' : ''}`} 
              onMouseEnter={() => handleMouseEnter(2)}
            ><a href="#servicios">
                <span>Para</span>
                <span className='name-item'>
                  Universidades
                  <ChevronDown/>
                </span>
              </a>
            </li>
            <li 
               className={`nav-item ${activeMenuItem === 3 ? 'active' : ''}`} 
              onMouseEnter={() => handleMouseEnter(3)}
            ><a href="#servicios">
                <span>Para</span>
                <span className='name-item'>
                  Gobierno
                  <ChevronDown/>
                </span>
              </a>
            </li>
            <li
                className={`nav-item ${activeMenuItem === 4 ? 'active' : ''}`} 
               onMouseEnter={() => handleMouseEnter(4)}
            ><a href="#paises">
                <span className='name-item'>
                  Soluciones
                  <ChevronDown/>
                </span>
              </a>
            </li>
            <li
               className={`nav-item ${activeMenuItem === 5 ? 'active' : ''}`} 
              onMouseEnter={() => handleMouseEnter(5)}
            ><a href="#mas">
               <span className='name-item'>
                  Más
                  <ChevronDown/>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      )}
      {scrolled && (
        <div onClick={toggleCountriesList}>
        <div className={`pais-section ${isCountriesVisible ? 'active' : ''}`}>
          <div className="whatsapp-floating-button">
            <a className='container-icon-header'>
              <img className='header-icon' src="/whatsapp-icon.png" alt="WhatsApp" />
              <span className='text-contacto'>Contáctanos</span>
            </a>
          </div>
          <span>{selectedCountry}</span> {/* Muestra el código del país o un texto predeterminado */}
          <i className="fas fa-globe"></i> {/* Icono del planeta */}
          <i className="fas fa-chevron-down"></i> {/* Icono de la flecha hacia abajo */}
        </div>
  
        {/* Solo mostramos la lista si isCountriesVisible es true */}
        {isCountriesVisible && (
          <ul className="countries-list">
            <li>Países</li>
            <li onClick={() => handleCountrySelect("Argentina", "AR")}>Argentina</li>
            <li onClick={() => handleCountrySelect("Chile", "CL")}>Chile</li>
            <li onClick={() => handleCountrySelect("Colombia", "CO")}>Colombia</li>
            <li onClick={() => handleCountrySelect("México", "MX")}>México</li>
            <li onClick={() => handleCountrySelect("Perú", "PE")}>Perú</li>
          </ul>
        )}
        </div>
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
