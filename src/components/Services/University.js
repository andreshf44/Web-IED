// components/Services/University.js
import { useState } from "react";

const University = () => {
    const [activeTab, setActiveTab] = useState("ai"); // por defecto AI
  
    const tabs = [
      { id: "ai", label: "Generative AI Courses" },
      { id: "data", label: "Course Builder" },
      { id: "tech", label: "Integridad Académica" },
      { id: "marketing", label: "Certificados profesionales" },
      { id: "career", label: "Career Academy" },
      { id: "speex", label: "Speex" },
    ];
  
    const renderContent = () => {
      switch (activeTab) {
        case "ai":
            return (
            <div>
                <div className="tab-content">
                    <h3>Prepare su campus con contenido GenAI que fortalezca la empleabilidad de los estudiantes, la eficacia del profesorado y el compromiso del personal.</h3>
                    <ul className="benefits-list">
                        <li>Prepare a profesores y estudiantes para usar GenAI de forma ética y responsable.</li>
                        <li>Desarrolle habilidades competitivas que impulsen la empleabilidad.</li>
                        <li>Capacite a los educadores para enseñar y aplicar la IA de forma eficaz.</li>
                    </ul>
                </div>
                <div className="first-content">
                    <div className="text-content">
                        <h3>¿Por qué IA Generativa en entornos educativos?</h3>
                        <p>A medida que la IA generativa transforma las industrias y las trayectorias 
                            profesionales, las universidades desempeñan un papel crucial al capacitar a 
                            estudiantes, profesorado y personal para adaptarse de forma eficaz y ética.
                        </p>
                        <p>Ofrece formación de alta demanda con cursos y proyectos prácticos de innovadores 
                            líderes en IA generativa. Capacita a la comunidad educativa con habilidades esenciales 
                            para profundizar sus conocimientos y garantizar un uso competente y responsable de las 
                            tecnologías avanzadas.
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
                    <h3>Impulse los resultados de sus estudiantes mediante el dominio de GenAI.</h3>
                    <ul className="benefits-list">
                        <li>Ayude a los estudiantes a desarrollar las habilidades de GenAI más demandadas: Cubra la creciente 
                            demanda de expertos en IA y capacítelos para prosperar en un mercado laboral en constante evolución.
                        </li>
                        <li>Inculque el uso ético de GenAI en los estudiantes: Fomente la toma de decisiones responsable 
                            estableciendo bases éticas en torno a los riesgos y oportunidades inherentes a GenAI.
                        </li>
                        <li>Atraiga a los estudiantes ofreciendo cursos de vanguardia: Ofrezca cursos innovadores para satisfacer 
                            las necesidades de los estudiantes que desean destacar en industrias dinámicas y cambiantes.
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            );
        case "data":
          return (
            <div className="datos-container university">
                <div className="tab-content">
                    <h3>Empodere a su facultad con herramientas de creación que le ahorran tiempo 
                        y mantienen los materiales de su curso relevantes y actualizados con Course Builder
                    </h3>
                    <ul className="benefits-list">
                        <li>Añade profesores invitados y contexto a tus cursos.</li>
                        <li>Lanza cursos personalizados y escalables.</li>
                        <li>Ahorra tiempo y esfuerzo a tu profesorado.</li>
                    </ul>
                </div>
                <div className="first-content">
                    <div className="box-data first-box">
                        <h3>88%</h3>
                        <p>de los participantes piloto que lanzaron un curso estaban satisfechos con la experiencia.</p>
                    </div>
                    <div className="box-data">
                        <h3>29%</h3>
                        <p>de los estudiantes encuestados dijeron que estaban satisfechos con los cursos creados durante el piloto.</p>
                    </div>
                </div>
                <div className="second-content">
                <div className="text-content">
                    <h3>Crea y lanza cursos personalizados a gran escala</h3>
                    <p>Course Builder es una herramienta de creación asistida por IA que permite al profesorado 
                        crear fácilmente cursos personalizados con contenido de primer nivel de socios de Coursera, 
                        tanto académicos como de la industria. Tanto si deseas combinar módulos de expertos líderes 
                        como añadir materiales específicos de tu institución, Course Builder ofrece una flexibilidad 
                        inigualable, lo que te ayuda a reforzar la relevancia, ahorrar tiempo y ofrecer un aprendizaje 
                        de calidad adaptado a tus necesidades.
                    </p>
                    <p>Con Course Builder cierra brechas mediante la incorporación de experiencia de clase mundial.</p>
                </div>
                <div className="img-content">
                  <img src="/los-disenadores-graficos-en-una-reunion.jpg" alt="soluciones enterprise" className="img-fluid"/>
                </div>
              </div>
            </div>
          );
        case "tech":
            return (
            <div>
                <div className="tab-content">
                    <h3>Explora herramientas de integridad académica para fomentar el aprendizaje auténtico, 
                        mantener la excelencia y mejorar las evaluaciones.
                    </h3>
                    <ul className="benefits-list">
                        <li>Protege la reputación de tu institución.</li>
                        <li>Promueve hábitos de aprendizaje saludables.</li>
                        <li>Adáptate a los desafíos de la IA generativa.</li>
                        <li>Aprovecha la IA para mejorar la eficiencia.</li>
                    </ul>
                </div>
                <div className="first-content">
                    <div className="text-content">
                        <h3>Verificar los resultados del aprendizaje</h3>
                        <p>El aprendizaje en línea es una herramienta poderosa para preparar a los estudiantes en 
                            un mundo en constante cambio. Si bien la IA Generativa puede suponer riesgos de mala 
                            conducta estudiantil, también ofrece a las universidades oportunidades únicas para fortalecer 
                            la integridad académica a gran escala.
                        </p>
                        <p>Las funciones de integridad académica de Coursera están diseñadas para promover una experiencia 
                            de aprendizaje más auténtica y verificada para estudiantes y educadores.
                        </p>
                    </div>
                    <div className="img-content">
                        <img src="/marcas-ied.png"  alt="marcas iEd" className="img-marcas"/>
                    </div>
                </div>
            </div>
            );
        case "marketing":
            return (
            <div className="tech-container">
                <div className="tab-content">
                    <h3>Permite que tus estudiantes aprendan de profesionales del sector, obtengan certificados 
                        profesionales y demuestren que están preparados para trabajar.
                    </h3>
                    <ul className="benefits-list">
                        <li>Ofrece contenido de empresas como Google, Meta, IBM, y muchas más.</li>
                        <li>Facilita la capacitación específica para cada función en campos de gran crecimiento.</li>
                        <li>Capacita a los estudiantes para que desarrollen habilidades para el mercado laboral 
                            mientras aprenden a su propio ritmo.
                        </li>
                    </ul>
                </div>
                <div className="first-content">
                    <div className="box-data first-box">
                        <h3>88%</h3>
                        <p>de los estudiantes tiene más probabilidades de inscribirse en programas de grado que 
                            ofrecen microcredenciales industriales
                        </p>
                    </div>
                    <div className="box-data">
                        <h3>76%</h3>
                        <p>de los empleadores prefiere contratar a un candidato que tenga un certificado profesional.</p>
                    </div>
                </div>
                <div className="second-content">
                <div className="text-content">
                    <h3>Integra la experiencia de la industria a tus programas</h3>
                    <p>Incrementa el valor de tus títulos de grado con certificados profesionales de alto nivel. 
                        Ayuda a tus estudiantes a desarrollar habilidades de gran demanda con la ayuda de profesionales 
                        de la industria y a adquirir experiencia del mundo real para puestos de nivel inicial.
                    </p>
                    <p>Crea nuevas oportunidades para que los estudiantes aprendan determinadas habilidades y alinéalas con 
                        tus programas de aprendizaje existentes. Gracias a los certificados profesionales, los estudiantes 
                        logran diferenciarse en su búsqueda y demuestran estar preparados para ocupar puestos de nivel inicial.
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
          <section className="enterprise-hero university">
            <div className="hero-overlay">
              <h1>
                iED <span>para Universidades</span>
              </h1>
            </div>
          </section>
    
          {/* Beneficios */}
          <section className="enterprise-benefits">
            <h2>Beneficios</h2>
            <p className="benefits-intro">
                Fortalece la inserción laboral para atraer a un mayor número de estudiantes.
            </p>
            <p className="benefits-description">
                Capacita a los estudiantes con las habilidades más demandadas y prepáralos para alcanzar el éxito en el mundo laboral.
            </p>
            <ul className="benefits-list">
              <li>Vincula planes de estudios a carreras profesionales</li>
              <li>Mejora los resultados laborales</li>
              <li>Mejora las experiencias de aprendizajes</li>
              <li>Contenido de nivel mundial</li>
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
    
export default University;
  

  
  
  