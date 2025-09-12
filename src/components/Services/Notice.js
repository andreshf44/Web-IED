// components/Services/Notice.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const newsData = [
  {
    id: 1,
    title: "Chile lidera en adopción de IA generativa en Latinoamérica",
    image: "/chatGpt.png",
    summary:
      "Un crecimiento interanual del 334% en inscripciones a cursos de GenAI posiciona a Chile como líder regional, según el informe de la plataforma de clases de Coursera.",
    country: { name: "Chile", code: "cl" },
    contentBlocks: [
      {
        type: "paragraph",
        text: "Un crecimiento interanual del 334% en inscripciones a cursos de GenAI posiciona a Chile como líder regional, según el informe de la plataforma de clases."
      },
      {
        type: "imageText",
        src: "/chatGpt1.png",
        text: [
          "Hablarle a un chatbot para resolver una duda, generar imágenes o aprender a programar con ayuda de inteligencia artificial (IA): estos escenarios, que hace un par de años no existían, hoy son parte del día a día de millones de personas en Chile.",
          "Un nuevo estudio de Coursera, plataforma de cursos online, reveló que el país encabeza la adopción de inteligencia artificial generativa (GenAI) en América Latina y el Caribe. Este es el tipo de IA que crea contenido a partir de datos existentes. Así, la GenAI puede generar textos, imágenes, audio, video, a través del aprendizaje continuo y la información que tiene la plataforma.",
          "Ejemplos de GenAI son las clásicas plataformas como ChatGPT, Gemini, Grok, entre otras."
        ]
      },
      {
        type: "imageText",
        src: "/chatGpt.png",
        text: [
          "El Informe Anual de Habilidades Globales 2025 analiza las tendencias de más de 170 millones de estudiantes en más de 100 países. De acuerdo con el estudio, en el país hubo un crecimiento interanual del 334% en las inscripciones a cursos relacionados a GenAI en la plataforma.",
          "Entre los factores que explican este posicionamiento está la reciente actualización de la Política Nacional de Inteligencia Artificial, que promueve el uso ético de esta tecnología y el fortalecimiento del capital humano."
        ]
      },
      {
        type: "subtitle",
        text: "¿Qué otros logros tiene Chile?"
      },
      {
        type: "paragraph",
        text: ["Chile también lidera la región en el Índice de Madurez de IA elaborado por la compañía, indicador que mide el nivel de preparación y adopción de esta tecnología en cada nación.",
          "En este informe, Chile se ubica además en el tercer lugar regional en desarrollo de habilidades generales, con niveles de competencia del 67% en negocios, 55% en tecnología y 50% en ciencia de datos.",
          "No obstante, el informe advierte que este avance digital aún no se traduce en un impacto económico sostenido. El crecimiento del PIB chileno se mantiene en torno al 2% anual, lo que sugiere que el país todavía enfrenta desafíos económicos."
        ]
      },
      {
        type: "subtitle",
        text: "¿Qué otros cursos toman los chilenos?"
      },
      {
        type: "paragraph",
        text: ["Además del auge de la GenAI, Coursera destaca un alza del 119% en las inscripciones a cursos de ciberseguridad y del 32% en certificados profesionales en Chile.",
          "También se observa una fuerte participación de la fuerza laboral: el 44% de los trabajadores del país utiliza activamente la plataforma, la tasa más alta en América Latina y el Caribe.",
          "Pese a estos avances, el estudio señala que persisten brechas de género en el acceso a la formación digital. Solo el 30% de las inscripciones en áreas STEM (ciencia, tecnología, ingeniería y matemáticas) corresponden a mujeres, lo que pone en evidencia la necesidad de impulsar la presencia femenina en estos rubros.",
          "“Cada estudiante que se forma con Coursera en Chile es parte de una transformación más grande: la de un país que apuesta por el conocimiento como motor de crecimiento”, señala Gilbert Leiva Ángulo, presidente de i-ED, empresa que representa a Coursera en Latinoamérica."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "La Universidad San Sebastián formaliza una alianza con Coursera, representada en LATAM por i-ED Educación Digital",
    image: "/universidadSebastian.png",
    summary: '"Esta alianza entre la Universidad San Sebastián e i-ED, marca un antes y un después en la forma en que concebimos la formación universitaria", expresó Gilbert Leiva.',
    country: { name: "Chile", code: "cl" },
    contentBlocks: [
      {
        type: "quote",
        text: "Esta alianza entre la Universidad San Sebastián e i-ED, marca un antes y un después en la forma en que concebimos la formación universitaria, expresó Gilbert Leiva, presidente de i-ED."
      },
      {
        type: "paragraph",
        text: "La Universidad San Sebastián (USS) formaliza una alianza con Coursera, representada en LATAM por i-ED Educación Digital, para fortalecer la empleabilidad de sus estudiantes."
      },
      {
        type: "paragraph",
        text: "Esta colaboración tiene tres grandes pilares: el desarrollo del cuerpo académico, integración de microcredenciales, y acceso a certificaciones de industria para toda la comunidad universitaria."
      },
      {
        type: "image",
        src: "/uss1.png"
      },
      {
        type: "image",
        src: "/uss2.png"
      },
      {
        type: "paragraph",
        text: "El presidente de i-ED, Gilbert Leiva, comentó que esta alianza marca un hito en la transformación de la educación superior en Chile."
      }
    ]
  },
  {
    id: 3,
    title: "Perú avanza en talento digital: sube en ranking global y crece interés por inteligencia artificial",
    image: "/talentoDigital.png",
    summary: "El Global Skills Report 2025 ubica al país en el puesto 45 de 109 naciones, con avances en tecnología, ciencia de datos y negocios.",
    country: { name: "Perú", code: "pe" },
    contentBlocks: [
      {
        type: "paragraph",
        text: "El Global Skills Report 2025 posiciona a Perú en el puesto 45 de 109 naciones evaluadas en habilidades digitales."
      },
      {
        type: "paragraph",
        text: "El país ha demostrado avances importantes en áreas como tecnología, ciencia de datos y negocios."
      },
      {
        type: "imageText",
        src: "/talentoDigital.png",
        text: "Además, el 7% de la fuerza laboral peruana ya ha comenzado a capacitarse en línea para adaptarse a la nueva economía digital."
      }
    ]
  },
  {
    id: 4,
    title: "Perú ocupa el puesto 45 a nivel mundial en habilidades digitales, según el Global Skills Report",
    image: "/habilidadesDigitales.png",
    summary: "El informe revela un crecimiento notable en cursos de inteligencia artificial generativa y ciberseguridad.",
    country: { name: "Perú", code: "pe" },
    contentBlocks: [
      {
        type: "paragraph",
        text: "El Global Skills Report 2025 indica que Perú ocupa el puesto 45 a nivel mundial en habilidades digitales."
      },
      {
        type: "image",
        src: "/habilidadesDigitales.png"
      },
      {
        type: "paragraph",
        text: "Los peruanos están mostrando un fuerte interés en cursos de GenAI y ciberseguridad, lo que indica una tendencia positiva."
      },
      {
        type: "paragraph",
        text: "Expertos coinciden en que este crecimiento es clave para desarrollar una economía del conocimiento sostenible."
      }
    ]
  },
  {
    id: 5,
    title: "¡Somos Speexx en LATAM!",
    image: "/speexMexico.png",
    summary: "Ofrecemos soluciones educativas de clase mundial para desarrollar competencias especializadas y formar profesionales de alto nivel.",
    country: { name: "México", code: "mx" },
    externalLink: "https://www.linkedin.com/feed/update/urn:li:activity:7328453310816940034/"
  },
  {
    id: 6,
    title: "El futuro del trabajo viene con un mensaje claro: la inclusión no es una opción, es una necesidad.",
    image: "/inclusionNotice.png",
    summary: "En América Latina, avanzar hacia entornos laborales más diversos, equitativos e inclusivos no solo responde a una responsabilidad social, sino también a una oportunidad estratégica para innovar, atraer talento y generar impacto sostenible.",
    country: { name: "México", code: "mx" },
    externalLink: "https://www.linkedin.com/feed/update/urn:li:activity:7324129483328823296/"
  }
];




const Notice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // 👈 Hook para redirección

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
  };

  const handleVerMas = (news) => {
    // Si tiene un link externo, redirige a ese link
    if (news.externalLink) {
      window.open(news.externalLink, "_blank"); // Abre en nueva pestaña
    } else {
      navigate(`/noticia/${news.id}`);
    }
  };

  const currentNews = newsData[currentIndex];

  return (
    <div className="enterprise-page">
      {/* Hero */}
      <section className="enterprise-hero notice">
        <div className="hero-overlay">
          <h1>Últimas noticias</h1>
        </div>
      </section>

      {/* Carrusel de noticias */}
      <section className="news-carousel">
        <div className="country-section">
          <span>
            <img 
              src={`https://flagcdn.com/${currentNews.country.code}.svg`} 
              width="24" 
              alt={`Bandera de ${currentNews.country.name}`} 
            />
            {currentNews.country.name}
          </span>
        </div>
        <div className="news-card">
          <img src={currentNews.image} alt={currentNews.title} />
          <div className="news-text">
            <h2>{currentNews.title}</h2>
            <p>{currentNews.summary}</p>
            <button className="ver-mas" onClick={() => handleVerMas(currentNews)}>
              Ver más →
            </button>
          </div>
          <button className="next-button" onClick={nextSlide}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Notice;
