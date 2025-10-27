// components/Services/University.js
import { useState } from "react";

const Nosotros = () => {

    return (
        <div className="enterprise-page">
            {/* Hero */}
            <section className="enterprise-hero nosotros">
                <div className="hero-overlay">
                    <h1>
                       Sobre <span>Nosotros</span>
                    </h1>
                </div>
            </section>
    
            {/* Beneficios */}
            <section className="enterprise-benefits nootros">
                <h2>¿Quiénes somos?</h2>
                <p>
                i-ED es una organización con más de 20 años de experiencia en formación corporativa premium. Con presencia en Chile, Argentina, Perú, Colombia y México, conectamos a empresas e instituciones con soluciones de aprendizaje de clase mundial.
                </p>
                <p>
                Nuestro modelo combina plataformas líderes, contenidos de alto nivel y acompañamiento local para impulsar la productividad, mejorar la retención de talento y fortalecer la cultura organizacional en equipos de todo tamaño.
                </p>
            </section>

            <section className="container-nosotros">
                <div className="first-content">
                    <div className="box-data first-box">
                        <h3><span>+</span>20</h3>
                        <p>años de experiencia en formación corporativa</p>
                    </div>
                    <div className="box-data">
                        <h3><span>+</span>50</h3>
                        <p>empresas e instituciones han confiado en nosotros</p>
                    </div>
                </div>
            </section>

            <section className="enterprise-benefits nosotros">
                <h2>Somos Coursera y Speexx en LATAM</h2>
                <p><span>Coursera</span>
                 con un catálogo superior a 12.000 cursos y certificaciones desarrolladas por universidades y empresas como Stanford, Yale, Google e IBM. Incluye contenidos en más de 20 idiomas, junto a herramientas de analítica y personalización para el desarrollo de habilidades en áreas como tecnología, liderazgo, negocios y ciberseguridad.
                </p>
                <p><span>Speexx</span>
                con programas de formación en idiomas y desarrollo comunicacional diseñados para entornos corporativos, con soluciones flexibles disponibles en español, francés, italiano y alemán. Integra coaching digital personalizado en liderazgo, comunicación y trabajo en equipo, con IA y tutores certificados.
                </p>
                <div>
                    <img src="/coursera.jpg"></img>
                    <img src="/speexx.jpg"></img>
                </div>
            </section>   

            <div className="third-content nosotros">
                <div className="img-content">
                  <img src="/GilbertLeiva.png" alt="soluciones enterprise" className="img-fluid"/>
                </div>
                <div className="text-content">
                  <h3>Sobre Gilbert Leiva</h3>
                  <p>Especialista en formación ejecutiva y estrategias para el desarrollo de competencias en entornos laborales en transformación. 
                  </p>
                  <p>Es director de la Asociación Chilena de Empresas de Tecnologías de la Información (ACTI) y preside la Mesa de Capital Humano.
                  </p>
                  <p className="p-subtitle-lista">Experto en:</p>
                    <ul className="benefits-list">
                    <li>Formación de talento.</li>
                    <li>Inteligencia Artificial aplicada a la capacitación.</li>
                    <li>Brechas de habilidades en América Latina.</li>
                    <li>Políticas públicas en educación y empleo.</li>
                    </ul>
                </div>             
            </div> 

                <div className="document-links" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexDirection: 'column', alignItems: 'center' }}>
                    <a
                    href="https://drive.google.com/file/d/1BfAj7-BRnu6jdOR7yJIVZvRcwcPLDfZx/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-doc"
                    style={{
                        color: '#58b8da',
                        padding: '10px 20px',
                        border: '2px solid #58b8da',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: '600'
                    }}
                    >
                    Reglamento interno de higiene y seguridad i-ED Global
                    </a>

                    <a
                    href="https://drive.google.com/file/d/1oF8-xBWCQ6deRijE2tsZ_e2tenMPI5lx/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-doc"
                    style={{
                        color: '#58b8da',
                        padding: '10px 20px',
                        border: '2px solid #58b8da',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: '600'
                    }}
                    >
                        Política Medioambiental i-ED Global
                    </a>
                </div>
         

            <h3 className="mensaje-final">Transforma el talento de tu organización con soluciones de clase mundial.</h3>         
        </div>
    );
};
    
export default Nosotros;
  

  
  
  