// components/Services/Enterprise.js
import { useState } from "react";

const Enterprise = () => {
    const [activeTab, setActiveTab] = useState("ai"); // por defecto AI
  
    const tabs = [
      { id: "ai", label: "Generative AI Academy" },
      { id: "data", label: "Academia de Datos" },
      { id: "tech", label: "Academia de Tecnología" },
      { id: "marketing", label: "Academia de Marketing" },
      { id: "career", label: "Career Academy" },
      { id: "speex", label: "Speex" },
    ];
  
    const renderContent = () => {
      switch (activeTab) {
        case "ai":
            return (
            <div>
              <div className="tab-content">
                <h3>Proporcione acceso a formación en IA Generativa impartida por expertos de las principales empresas y universidades con la Generative AI Academy de Coursera.</h3>
                <ul className="benefits-list">
                    <li>Desarrolle habilidades GenAI cruciales para la misión con contenido confiable.</li>
                    <li>Aprenda a usar GenAI de forma ética y responsable.</li>
                    <li>Impulse una gestión eficaz del cambio, inspirando a los empleados en una era en constante evolución.</li>
                </ul>
              </div>
              <div className="first-content">
                <div className="text-content">
                  <h3>¿Por qué IA Generativa?</h3>
                  <p>La IA generativa está llamada a ser la mayor revolución tecnológica desde Internet. 
                    Los líderes empresariales y sus socios de L&D desempeñan un papel fundamental y tienen 
                    la oportunidad de fomentar la alfabetización básica de todos los miembros de la organización.
                  </p>
                  <p>GenAI for Everyone de Coursera proporciona a los empleados conocimientos básicos y la adquisición 
                    de habilidades para ayudar a desbloquear la innovación empresarial y las ganancias de productividad. 
                    Este catálogo incluye más de 50 cursos, contenidos breves y proyectos prácticos de los principales 
                    expertos del sector y del mundo académico, como AWS, DeepLearning.AI, Vanderbilt, IBM y Google.
                  </p>
                </div>
                <div className="img-content">
                  <img src="/marcas-ied.png"  alt="marcas iEd" className="img-marcas"/>
                </div>
              </div>
              <div className="second-content">
                <div className="img-content">
                  <img src="/soluciones-enterprise.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
                <div className="text-content">
                  <h3>Impulsa la innovación</h3>
                  <p>Prepare a su equipo con habilidades de GenAI específicas para cada función.</p>
                  <p>Capacite a los equipos funcionales para comprender y adoptar éticamente las mejores prácticas de GenAI 
                    específicas para su función empresarial, incluyendo software, producto, ciencia de datos y marketing. 
                    Integre GenAI en las operaciones diarias para automatizar tareas rutinarias, acelerar la toma de 
                    decisiones y liberar tiempo para iniciativas estratégicas que impulsen el crecimiento y la innovación 
                    del negocio.
                  </p>
                </div>
              </div>
            </div>
            );
        case "data":
          return (
            <div className="datos-container">
              <div className="tab-content">
                <h3>Ejecuta e innova más con datos</h3>
                <p>
                  Permite que tus empleados analicen e interpreten datos para tomar mejores decisiones empresariales 
                  con mayor rapidez, y que puedan descubrir nuevas ideas con la Academia de Datos y Análisis.
                </p>
                <p>
                  Capacita a todos los empleados en todos los niveles para que desarrollen la alfabetización de datos básica. 
                  Mejora las habilidades de los equipos de datos con capacitaciones de nivel profesional en aprendizaje 
                  automático, inteligencia artificial y en otros campos emergentes.
                </p>
              </div>
              <div className="first-content">
                <h3>55%</h3>
                <p>de los directores generales creen que la falta de habilidades clave dificulta la capacidad de innovación.</p>
              </div>
              <div className="second-content">
                <div className="text-content">
                  <h3>Incorpora el contenido más efectivo, más relevante para el trabajo y mejor calificado</h3>
                  <p>Más de 60 SkillSets para ayudar a perfeccionarte y obtener nuevas habilidades clave en 
                    materia de finanzas, automatización y análisis de datos con el fin de impulsar el crecimiento 
                    sostenido dentro de tu organización. Más de 30 LevelSets para ayudar a los alumnos a encontrar 
                    el punto de partida adecuado en su viaje de aprendizaje y evaluar las principales carencias en 
                    el área de la contabilidad, blockchain, el análisis empresarial, la gestión de riesgos y mucho más
                  </p>
                </div>
                <div className="img-content">
                  <img src="/reunion-de-empresarios-en-la-oficina-de-trabajo.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
              </div>
            </div>
          );
        case "tech":
          return (
            <div className="tech-container">
              <div className="tab-content">
                <h3>Acelera la transformación tecnológica</h3>
                <p>
                  Agiliza la mejora y el perfeccionamiento de las habilidades de los empleados en 
                  materia de TI, nube, seguridad y otras áreas tecnológicas críticas con la Academia 
                  de enseñanza de tecnología de Coursera.
                </p>
              </div>
              <div className="first-content">
                <div className="box-data first-box">
                  <h3>3.4x</h3>
                  <p>Las organizaciones que mejoran el conocimiento tienen de 3.4 veces más éxito 
                    en la implementación de las transformaciones tecnológicas.
                  </p>
                </div>
                <div className="box-data">
                  <h3>89%</h3>
                  <p>de los directores de contratación de TI informaron de los desafíos a la hora de 
                    contratar a los mejores talentos.
                  </p>
                </div>
              </div>
              <div className="second-content">
                <div className="text-content">
                  <h3>¿Por qué son importantes la habilidades técnicas?</h3>
                  <p>Cierra la brecha de habilidades de tecnología al capacitar a los equipos de alto 
                    rendimiento con talento existente. Desarrolla capacidades de gran demanda y nuevas 
                    experiencias digitales para impulsar la innovación y la competitividad.
                  </p>
                  <p>Desarrolla equipos de tecnología de alto rendimiento con contenido de nivel principiante 
                    y avanzado con más de 20 evaluaciones de LevelSet para medir habilidades básicas y más de 
                    50 SkillSets para impulsar la competencia tecnológica en toda la organización.
                  </p>
                  <p>Lidera tu competencia con equipos de tecnología altamente capacitados.</p>
                </div>
                <div className="img-content">
                  <img src="/los-disenadores-graficos-en-una-reunion.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
              </div>
            </div>
          );
        case "marketing":
          return (
            <div className="tech-container">
              <div className="tab-content">
                <h3>Impulsa el crecimiento de tu negocio con las más recientes habilidades de marketing</h3>
                <p>
                  Otorga acceso a la capacitación en marketing digital, motores de búsqueda y redes sociales 
                  de la mano de expertos en marketing de las empresas y universidades más importantes con la 
                  Academia de Marketing de Coursera.
                </p>
              </div>
              <div className="first-content">
                <div className="box-data first-box">
                  <h3>35%</h3>
                  <p>En un estudio exhaustivo a ejecutivos de marketing, el 35% afirmó que el gran desafío que 
                    hoy enfrentan es el déficit de talentos y habilidades.
                  </p>
                </div>
                <div className="box-data">
                  <h3>29%</h3>
                  <p>de los trabajos subcontratados a agencias se vuelven a realizar de manera interna en los 
                    últimos 12 meses.
                  </p>
                </div>
              </div>
              <div className="second-content">
                <div className="text-content">
                  <h3>¿Por qué habilidades de marketing digital?</h3>
                  <p>Desarrolla habilidades analíticas profundas para adquirir información e impulsar la toma 
                    de decisiones basada en datos, y utiliza herramientas de tecnología de mercado de una manera 
                    más eficiente para maximizar el retorno de la inversión en el sector de marketing.
                  </p>
                  <p>Promueve el crecimiento del negocio mediante el aprendizaje con contenido de nivel principiante 
                    y avanzado con más de 20 evaluaciones de LevelSet para medir habilidades básicas y más de 65 
                    SkillSets para impulsar la competencia en marketing en toda la organización.
                  </p>
                </div>
                <div className="img-content">
                  <img src="/los-disenadores-graficos-en-una-reunion.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
              </div>
            </div>
          );
        case "career":
          return (
            <div className="tech-container">
              <div className="tab-content">
                <h3 className="subtitle-career">Prepara a los trabajadores para puestos de trabajo de gran demanda en la industria digital</h3>
                <p>
                Atrae a los trabajadores de primera línea mientras promueves la movilidad interna con la 
                Academia de cursos profesionales. Ofrece capacitación de las principales empresas del mundo como 
                Google, Ashok Leyland, Salesforce y Meta.
                </p>
              </div>
              <div className="first-content">
                <div className="box-data first-box">
                  <h3>70%</h3>
                  <p>los empleos que requieren habilidades digitales han crecido desde 2002.</p>
                </div>
                <div className="box-data">
                  <h3>80%</h3>
                  <p>salarios más elevados para quienes poseen habilidades digitales.</p>
                </div>
              </div>
              <div className="second-content">
                <div className="text-content">
                  <h3>Ofrece capacitación en tecnología a los trabajadores de primera línea</h3>
                  <p>Ayuda a los trabajadores a aprender nuevas habilidades tecnológicas con tutoriales guiados 
                    que enseñan a utilizar herramientas digitales muy relevantes. Los ejemplos incluyen lo siguiente:
                  </p>
                  <ul className="benefits-list">
                    <li>Cómo usar fórmulas y las funciones básicas de Microsoft Excel</li>
                    <li>Crea presentaciones visualmente atractivas con Microsoft Sway</li>
                    <li>Crea una página de inicio con Mailchimp</li>
                  </ul>
                </div>
                <div className="img-content">
                  <img src="/los-disenadores-graficos-en-una-reunion.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
              </div>
              <div className="third-content">
                <div className="img-content">
                  <img src="/soluciones-enterprise.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
                <div className="text-content">
                  <h3>Ofrece formas de movilidad interna</h3>
                  <p>Guía a los empleados para que comprendan los puestos de trabajo de nivel inicial con información 
                    sobre títulos de trabajos comunes, requisitos de habilidades y salarios por regiones.
                  </p>
                  <p>En un estudio se descubrió que los trabajadores de primera línea señalaron que la perspectiva de 
                    ascenso es la razón principal para unirse y permanecer en una organización. 
                  </p>
                  <p>Ofrece oportunidades competitivas de desarrollo profesional para atraer talento de primera línea.</p>
                </div>             
              </div>
            </div>
          );
        case "speex":
            return (
              <div className="tech-container">
                <div className="tab-content">
                  <h3>La solución más efectiva para el aprendizaje del idioma inglés.</h3>
                  <p>Solución integral para el aprendizaje y evaluación de idiomas en entornos empresariales, 
                    educativos y profesionales. Garantice el éxito de su institución, logrando que estudiantes, 
                    docentes y funcionarios alcancen una habilidad de comunicación internacional.
                  </p>
                </div>
                <div className="first-content">
                  <div className="box-data first-box">
                    <h3><span>+</span>8mm</h3>
                    <p>de usuarios a nivel mundial.</p>
                  </div>
                  <div className="box-data">
                    <h3><span>+</span>200</h3>
                    <p>premios internacionales.</p>
                  </div>
                </div>
                <div className="second-content speex-second">
                  <div className="text-content">
                    <h3>¿Por qué Speex?</h3>
                    <p>La solución más efectiva para el aprendizaje del idioma.</p>
                    <ul className="benefits-list">
                      <li>Tecnología probada, premiada y certificada a nivel mundial.</li>
                      <li>Contenido personalizado con el uso de IA.</li>
                      <li>Soporte profesional 24/7.</li>
                      <li>Enfoque en Habilidades Comunicativas de Negocios.</li>
                      <li>Continuidad y seguimiento del aprendizaje.</li>
                      <li>En cualquier dispositivo y en cualquier lugar.</li>
                  </ul>
                </div>
                <div className="img-content">
                  <img src="/los-disenadores-graficos-en-una-reunion.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
              </div>
              <div className="third-content">
                <div className="img-content">
                  <img src="/soluciones-enterprise.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
                <div className="text-content">
                  <h3>Doble certificación</h3>
                  <p>Speexx, en alianza con la Universidad de Cambridge, te la posibilidad de tener doble certificación 
                    para respaldar tu aprendizaje, bajo el estándar internacional CEFR.
                  </p>
                  <p>Todos los usuarios de Speexx siguen un viaje de aprendizaje progresivo alineado con la escala de 
                    competencia del CEFR. Speex emite un certificado del CERF por cada nivel aprobado. 
                  </p>
                  <p>Speex también incluye el certificado Linguaskill de la Universidad de Cambridge.</p>
                </div>             
              </div>
            </div>
            );
          default:
          return null;
      }
    };

    return (
        <div className="enterprise-page">
          {/* Hero */}
          <section className="enterprise-hero">
            <div className="hero-overlay">
              <h1>
                iED <span>para Empresas</span>
              </h1>
            </div>
          </section>
    
          {/* Beneficios */}
          <section className="enterprise-benefits">
            <h2>Beneficios</h2>
            <p className="benefits-intro">
              Mejora las habilidades en cualquier puesto y prospera al enfrentar el cambio.
            </p>
            <p className="benefits-description">
              Prepara a tus empleados para la IA generativa y otras clases de aceleración tecnológica
              con habilidades alineadas con el trabajo, perspectivas basadas en datos, contenido y credenciales confiables.
            </p>
            <ul className="benefits-list">
              <li>Cierra brechas en las habilidades</li>
              <li>Desarrolla los talentos</li>
              <li>Conserva los talentos</li>
              <li>Vuelve a capacitar a los talentos</li>
            </ul>
          </section>
    
          {/* Soluciones con Tabs */}
          <section className="enterprise-solutions">
            <div className="fixed-section">
              <h2>Soluciones</h2>
    
              {/* Tabs */}
              <div className="tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
    
            {/* Contenido dinámico */}
            <div className="solutions-content">{renderContent()}</div>
          </section>

          {/* Soluciones con Tabs */}   
          <section className="enterprise-contact">
            <p>Contacta con nosotros para más información.</p>
            <button>Contáctanos</button>
          </section>       
        </div>
      );
};
    
export default Enterprise;
  

  
  
  