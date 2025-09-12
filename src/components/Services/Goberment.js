// components/Services/University.js
import { useState } from "react";

const Goberment = () => {
    const [activeTab, setActiveTab] = useState("ai"); // por defecto AI
  
    const tabs = [
      { id: "ai", label: "Career Academy" },
      { id: "data", label: "Academia de datos y análisis" },
      { id: "tech", label: "Academia de liderazgo" },
      { id: "marketing", label: "Academia de tecnología" },
      { id: "speex", label: "Speex" },
    ];
  
    const renderContent = () => {
      switch (activeTab) {
        case "ai":
            return (
            <div className="datos-container">
                <div className="tab-content">
                    <h3>Equipa al personal para los puestos de puestos digitales de nivel inicial</h3>
                    <ul className="benefits-list">
                        <li>Capacita a los ciudadanos y a los empleados de la administración pública para puestos digitales de nivel inicial con certificados profesionales de empresas líderes como Google, Meta, IBM, entre otras. No se requiere experiencia ni título de grado para inscribirse.</li>
                        <li>Brinda acceso a más de 20 certificados profesionales de empresas líderes, como Google, Meta e IBM, y empodera a quienes buscan empleo para que se preparen para funciones de nivel básico en áreas como análisis de datos, desarrollo de software, operaciones de TI y ventas.</li>
                    </ul>
                </div>
                <div className="first-content">
                    <h3>97m</h3>
                    <p>Para 2026, se crearán 97 millones de nuevos empleos digitales en todo el mundo.</p>
                </div>
            </div>
            );
        case "data":
          return (
            <div className="datos-container university">
                <div className="tab-content">
                    <h3>Construye tu transformación digital en datos</h3>
                    <p>Desarrolla roles de datos fundamentales para fortalecer tu organización con personal que sepa sobre datos. Impulsa decisiones más rápidas y mejores con la Academia de análisis y datos.</p>
                </div>
                <div className="first-content">
                    <div className="box-data">
                        <h3>55%</h3>
                        <p>de los directores generales creen que la falta de habilidades clave dificulta la capacidad de innovación.</p>
                    </div>
                </div>
                <div className="second-content">
                    <div className="text-content">
                        <h3>¿Por qué son importantes las habilidades en materia de datos?</h3>
                        <p>Desarrolla los conocimientos básicos sobre datos para tu personal. Mejora las habilidades de los equipos de datos con capacitaciones de nivel profesional en aprendizaje automático, inteligencia artificial y en otros campos emergentes.</p>
                        <p>Obtén resultados y manténte competitivo con contenido de nivel principiante y avanzado, que incluye más de 30 evaluaciones LevelSet para medir las habilidades básicas y más de 60 SkillSets para impulsar el dominio de los datos en toda la organización.</p>
                    </div>
                      <div className="img-content">
                        <img src="/reunion-de-empresarios-en-la-oficina-de-trabajo.jpg" alt="soluciones enterprise" className="img-fluid"/>
                    </div>
                </div>
                <div className="third-content">
                    <div className="img-content">
                    <img src="/soluciones-enterprise.jpg" alt="soluciones enterprise" className="img-fluid"/>
                    </div>
                    <div className="text-content">
                    <h3>Involucra a los funcionarios con la capacitación de datos interactiva</h3>
                    <p>Ayuda a tu personal a aprender con rapidez nuevas habilidades en materia de datos con tutoriales interactivos que les presentarán habilidades y herramientas de datos muy relevantes. Los tutoriales de ejemplo incluyen lo siguiente:</p>
                    <ul className="benefits-list">
                        <li>Visualización de datos en diapositivas de Google</li>
                        <li>Crear una aplicación Python mediante el uso de MySQL</li>
                        <li>Introducción al análisis de series temporales en R.</li>
                    </ul>
                    </div>             
                </div>
                <div className="fourth-content">
                    <div className="text-content">
                        <h3>Realiza un seguimiento del éxito de la inversión en aprendizaje</h3>                       
                        <p>Comprende en qué medida tu personal está adquiriendo las habilidades de datos que necesita, y desarrolla una inteligencia competitiva más sólida al entender cómo se comparan los perfiles de habilidades de tus estudiantes con los de tu organización o región.</p>
                    </div>
                      <div className="img-content">
                        <img src="/los-disenadores-graficos-en-una-reunion.jpg" alt="soluciones enterprise" className="img-fluid"/>
                    </div>
                </div>
            </div>
          );
        case "tech":
            return (
            <div className="datos-container university">
                <div className="tab-content">
                    <h3>Desarrolla los líderes que tu país necesita</h3>
                    <ul className="benefits-list">
                        <li>Forma líderes en todo tu personal.</li>
                        <li>Desarrolla una organización que innova e inspira con la Academia de Liderazgo de Coursera.</li>
                        <li>Crea liderazgo en todos los niveles para mejorar la prestación de servicios, impulsar la transformación digital y aumentar la eficacia de tu organización.</li>
                    </ul>
                </div>
                <div className="first-content">
                    <div className="box-data first-box">
                        <h3>2do</h3>
                        <p>El liderazgo es la segunda más importante de las 32 prioridades que señalan los profesionales de RR.HH.</p>
                    </div>
                    <div className="box-data">
                        <h3>88%</h3>
                        <p>de los profesionales de RR.HH. mencionaron el desarrollo del liderazgo como una clave para alcanzar el éxito empresarial.</p>
                    </div>
                </div>
                <div className="second-content">
                    <div className="text-content">
                        <h3>Ayuda a los nuevos y experimentados líderes a desarrollar habilidades esenciales</h3>
                        <p>Refuerza las habilidades de liderazgo de tu organización con acceso a capacitación a pedido a través de los SkillSets: programas de aprendizaje listos para usar basados en el trabajo.</p>
                        <ul className="benefits-list">
                            <li>Lidera tú mismo.</li>
                            <li>Lidera equipos.</li>
                            <li>Lidera organizaciones.</li>
                            <li>Lidera transformación.</li>
                    </ul>
                    </div>
                    <div className="img-content">
                        <img src="/reunion-de-empresarios-en-la-oficina-de-trabajo.jpg" alt="soluciones enterprise" className="img-fluid"/>
                    </div>
                </div>
            </div>
            );
        case "marketing":
            return (
            <div className="tech-container">
                <div className="tab-content">
                    <h3>Impulsa la transformación digital de tu organización gubernamental
                    </h3>
                    <p>Crea una fuerza laboral más sólida y competente en tecnología con capacitación en software, informática en la nube, seguridad y más, usando la Academia tecnológica de Coursera.</p>
                </div>
                <div className="first-content">
                    <div className="box-data first-box">
                        <h3>3.4x</h3>
                        <p>Las organizaciones que mejoran el conocimiento tienen de 3.4 veces más éxito en la implementación de las transformaciones tecnológicas.</p>
                    </div>
                    <div className="box-data">
                        <h3>89%</h3>
                        <p>de directores de contratación de TI informaron de los desafíos a la hora de contratar a los mejores talentos.</p>
                    </div>
                </div>
                <div className="second-content">
                    <div className="text-content">
                        <h3>Desarrolla personal tecnológico altamente cualificado</h3>
                        <p>Cerrar la brecha de habilidades tecnológicas al capacitar organizaciones de alto rendimiento con el talento existente. Desarrolla capacidades muy demandadas y mejora la prestación de servicios con personal capacitado en tecnología.</p>
                        <p>'Las empresas demandan cada vez más ingenieros calificados para que creen, desarrollen y mantengan sistemas, desde la fabricación hasta el diseño de productos. Pero el crecimiento de la cantidad de graduados en ingeniería no sigue el mismo ritmo', según Forbes.</p>
                    </div>
                    <div className="img-content">
                        <img src="/reunion-de-empresarios-en-la-oficina-de-trabajo.jpg" alt="soluciones enterprise" className="img-fluid"/>
                    </div>
                </div>
            </div>
            );
    
        case "speex":
            return (
              <div className="tech-container">
                <div className="tab-content">
                  <h3>La solución más efectiva para el aprendizaje del idioma inglés.</h3>
                  <p>Solución integral para el aprendizaje y evaluación de idiomas en entornos empresariales, educativos y profesionales. Garantice el éxito de su institución, logrando que estudiantes, docentes y funcionarios alcancen una habilidad de comunicación internacional.</p>
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
          <section className="enterprise-hero goberment">
            <div className="hero-overlay">
              <h1>
                iED <span>para Gobierno</span>
              </h1>
            </div>
          </section>
    
          {/* Beneficios */}
          <section className="enterprise-benefits">
            <h2>Beneficios</h2>
            <p className="benefits-intro">
                Brinda a los ciudadanos y a los empleados de organizaciones gubernamentales habilidades de gran demanda
            </p>
            <p className="benefits-description">
            Elige las soluciones de carreras profesionales adecuadas para tus ciudadanos y empleados.
            </p>
            <ul className="benefits-list">
              <li>Mejora las habilidades de los empleados de organizaciones gubernamentales.</li>
              <li>Capacita a tus ciudadanos.</li>
              <li>Aumenta tu talento y tu economía con la plataforma de habilidades líder a nivel mundial.</li>
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
    
export default Goberment;
  

  
  
  