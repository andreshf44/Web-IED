// components/Services/University.js
import { useState } from "react";

const Sence = () => {

    return (
        <div className="enterprise-page">
            {/* Hero */}
            <section className="enterprise-hero coursera speex">
                <div className="hero-overlay">
                    <img src="/sence.png"></img>
                </div>
            </section>
    
            {/* Beneficios */}
            <section className="enterprise-benefits coursera">
                <h2>Sobre SENCE</h2>
                <h3>¿Qué es?</h3>
                <p>El Servicio Nacional de Capacitación y Empleo (SENCE) es un organismo público dependiente del Ministerio del Trabajo y Previsión Social de Chile. Su misión es aumentar la empleabilidad de las personas y la productividad de las empresas, mediante programas de capacitación, subsidios al empleo y certificación de competencias.</p>

                <h3>Principales funciones</h3>
                <ul className="benefits-list">
                    <li><span>Capacitación laboral:</span>coordina y financia cursos para trabajadores ocupados y personas cesantes.</li>
                    <li><span>Certificación de competencias:</span>reconoce formalmente habilidades laborales, aunque no se cuente con estudios formales.</li>
                    <li><span>Subsidios e incentivos al empleo:</span>entrega apoyos económicos para contratación de jóvenes, mujeres y grupos vulnerables.</li>
                    <li><span>Intermediación laboral:</span>gestiona la Bolsa Nacional de Empleo (BNE) para conectar empresas y trabajadores.</li>
                    <li><span>Franquicia Tributaria de Capacitación:</span>instrumento clave de financiamiento que beneficia a empresas.</li>
                </ul>

                <h3>Características</h3>
                <ul className="benefits-list">
                    <li>El monto máximo a rebajar depende de la planilla anual de remuneraciones imponibles de la empresa.</li>
                    <li>Puede usarse en cursos internos o externos dictados por Organismos Técnicos de Capacitación (OTEC) autorizados.</li>
                    <li>Incluye modalidades presenciales, online y mixtas.</li>
                    <li>Permite financiar no solo capacitación, sino también diagnósticos, evaluación de competencias y becas laborales en algunos casos.</li>
                </ul>

                <h3>Beneficios de contratar a I-ED como OTEC</h3>
                <ol className="benefits-list sence">
                    <li>Acceso a la franquicia tributaria SENCE
                        <p>I+ED es un Organismo Técnico de Capacitación (OTEC) acreditado, lo que permite a las empresas financiar sus programas de formación mediante la franquicia tributaria de capacitación, optimizando sus recursos sin aumentar costos operativos.</p></li>
                    <li>Cursos e-learning con respaldo internacional
                        <p>Todos los programas de capacitación se desarrollan en modalidad e-learning, otorgando flexibilidad horaria y acceso desde cualquier lugar. Además, cuentan con el prestigio académico de las mejores universidades del mundo a través de la alianza con Coursera, asegurando contenidos de excelencia y actualización constante.</p>
                    </li>
                    <li>Programas a medida para empresasI+ED 
                        <p>diseña itinerarios de aprendizaje personalizados que combinan cursos de Coursera, adaptándose a las necesidades reales de cada organización y a las competencias requeridas por su sector productivo.</p>
                    </li>
                    <li>Mejora en la productividad y competitividad
                        <p>Los trabajadores adquieren habilidades técnicas y transversales de nivel global, lo que contribuye directamente a incrementar la eficiencia, la innovación y la capacidad competitiva de la empresa.</p>
                    </li>
                    <li>Calidad certificada
                        <p>I+ED cumple con las exigencias normativas de SENCE y la Norma Chilena NCh 2728:2015, asegurando calidad en los procesos y respaldo en auditorías de capacitación.</p>
                    </li>
                    <li>Impacto en la empleabilidad y clima laboral
                        <p>Los cursos permiten obtener certificaciones internacionales de gran prestigio fortaleciendo el desarrollo profesional de los trabajadores, aumentando su motivación, compromiso y sentido de pertenencia, lo que mejora el clima organizacional y disminuye la rotación de personal.</p>
                    </li>
                </ol>

            </section>

            {/* Soluciones con Tabs */}   
            <section className="enterprise-contact">
                <p>Contacta con nosotros para más información.</p>
                <button>Contáctanos</button>
            </section>    
        </div>
      );
};
    
export default Sence;
  

  
  
  