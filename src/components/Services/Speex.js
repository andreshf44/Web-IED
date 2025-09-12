// components/Services/University.js
import { useState } from "react";

const Speex = () => {

    return (
        <div className="enterprise-page">
            {/* Hero */}
            <section className="enterprise-hero coursera speex">
                <div className="hero-overlay">
                    <img src="/speex1.png"></img>
                </div>
            </section>
    
            {/* Beneficios */}
            <section className="enterprise-benefits coursera">
                <h2>Sobre Speexx</h2>
                <h3>Formación en idiomas y coaching empresarial</h3>
                <p>Su enfoque integral combina evaluación precisa, aprendizaje en línea interactivo con ejercicios basados en inteligencia artificial, instructores nativos certificados y soporte continuo para garantizar resultados sobresalientes.</p>

                <h3>Formación digital</h3>
                <ul className="benefits-list">
                    <li>Duración de suscripción: 3,6 o 12 meses.</li>
                    <li>Instructores nativos certificados.</li>
                    <li>Contenido personalizado con inteligencia artificial.</li>
                    <li>Aprendizaje alineado con Marco Común Europeo.</li>
                    <li>Soporte continuo en 13 idiomas.</li>
                    <li>Implementación SSO e integración LMS/LXP/Scorm.</li>
                    <li>Financiamiento Sence en Chile.</li>
                </ul>

                <h3>Reportería Speex Manager</h3>
                <p>Te permiten gestionar la formación de manera más eficiente, proporcionando datos claros para que puedas ver rápidamente qué programas están funcionando y cuáles generan los mejores resultados. Además, Speexx Manager facilita el trabajo diario, ofreciendo analíticas diseñadas especialmente para equipos de RRHH y L&D, ¡haciendo todo el proceso más efectivo y sencillo!</p>
                
            </section>

            {/* Soluciones con Tabs */}   
            <section className="enterprise-contact">
                <p>Contacta con nosotros para más información.</p>
                <button>Contáctanos</button>
            </section>    
        </div>
      );
};
    
export default Speex;
  

  
  
  