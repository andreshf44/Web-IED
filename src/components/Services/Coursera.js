// components/Services/Coursera.js
import { useState } from "react";

const Coursera = () => {

    return (
        <div className="enterprise-page">
            {/* Hero */}
            <section className="enterprise-hero coursera">
                <div className="hero-overlay">
                    <img src="/coursera1.png"></img>
                </div>
            </section>
    
            {/* Beneficios */}
            <section className="enterprise-benefits coursera">
                <h2>Sobre Coursera</h2>
                <h3>Plataforma líder mundial</h3>
                <p>Respaldada por la confianza de más de 170 millones de estudiantes y más de 7.000 organizaciones, ofrece acceso a ilimitado a más de 13.000 cursos y academias con cursos creados por más de 350 instituciones globales.</p>
                <ul className="benefits-list">
                    <li>Curación de contenidos by i-ED</li>
                    <li>Academias</li>
                    <li>Skillsets</li>
                    <li>Levelsets</li>
                    <li>Coach con IA</li>
                    <li>Course Builder con IA*</li>
                </ul>

                <h3>Certificados e insignias</h3>
                <p>Respaldada por la confianza de más de 170 millones de estudiantes y más de 7.000 organizaciones, ofrece acceso a ilimitado a más de 13.000 cursos y academias con cursos creados por más de 350 instituciones globales.</p>
                <ul className="benefits-list">
                    <li>Curación de contenidos by i-ED</li>
                    <li>Academias</li>
                    <li>Skillsets</li>
                    <li>Levelsets</li>
                    <li>Coach con IA</li>
                    <li>Course Builder con IA*</li>
                </ul>

                <h3>Contenido de clase mundial</h3>
                <p>Entrega a tus colaboradores desarrollo profesional con más de 350 marcas destacadas.</p>
                <ul className="benefits-list">
                    <li>De universidades líderes a nivel mundial: desde Yale, Duke, Northwestern y la Universidad de Michigan hasta la Escuela de Negocios francesa HEC y MIT.</li>
                    <li>De empresas líderes como: Google, IBM, AWS, Meta, Amazon, BCG y más.</li>
                </ul>

                <h3>Personalización de aprendizaje</h3>
                <ul>
                    <li>Curación de contenidos by i-ED</li>
                    <li>Academias</li>
                    <li>Skillsets</li>
                    <li>Levelsets</li>
                    <li>Coach con IA</li>
                    <li>Course Builder con IA*</li>
                </ul>
            </section>
            <section className="end-section">
                <h3>SUPERA LAS BRECHAS DE HABILIDADES HUMANAS Y TECNOLÓGICAS CON ACCESO A MÁS DE 12.000 CURSOS</h3>     
                <div className="container-icon">
                    <div>
                        <i className="fas fa-users"></i>
                        <p>Liderazgo</p>
                        <span>Más de 750 cursos</span>
                    </div>
                    <div>
                        <i className="fas fa-stethoscope"></i>
                        <p>Salud</p>
                        <span>Más de 750 cursos</span>
                    </div>
                    <div>
                        <i className="fas fa-eye"></i>
                        <p>Inteligencia Artificial</p>
                        <span>Más de 500 cursos</span>
                    </div>
                    <div>
                        <i className="fas fa-briefcase"></i>
                        <p>Negocio</p>
                        <span>Más de 3.000 cursos</span>
                    </div>
                    <div>
                        <i className="fas fa-desktop"></i>
                        <p>Tecnología</p>
                        <span>Más de 4.300 cursos</span>
                    </div>
                    <div>
                        <i className="fas fa-chart-pie"></i>
                        <p>Ciencia de datos</p>
                        <span>Más de 1.600 cursos</span>
                    </div>
                </div>
            </section>

            {/* Soluciones con Tabs */}   
            <section className="enterprise-contact">
                <p>Contacta con nosotros para más información.</p>
                <button>Contáctanos</button>
            </section>    
        </div>
      );
};
    
export default Coursera;
  

  
  
  