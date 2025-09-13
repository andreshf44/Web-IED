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
        type: "paragraph",
        text: "Esta alianza entre la Universidad San Sebastián e i-ED, marca un antes y un después en la forma en que concebimos la formación universitaria, expresó Gilbert Leiva, presidente de i-ED."
      },
      {
        type: "imageGroup",
        src: ["/universidadSebastian1.png", "/universidadSebastian.png"],
        alt: "Imágenes de la Universidad San Sebastián"
      },
      {
        type: "paragraph",
        text: ["La Universidad San Sebastián (USS) formaliza una alianza con Coursera, representada en LATAM por i-ED Educación Digital, para fortalecer la empleabilidad de sus estudiantes.",
               '"Estamos muy entusiasmados por este acuerdo con una de las universidades más grandes de Chile. Esta colaboración tiene tres grandes pilares: el desarrollo profesional del cuerpo académico y administrativo; la integración de microcredenciales en los programas de estudio; y el acceso a certificaciones de industria para toda la comunidad universitaria, incluidos exalumnos", Christian Hernandez Quiroz, Director Coursera Enterprise LATAM',
               'Por su parte, el presidente de i-ED, Gilbert E. Leiva Angulo, asegura que "Esta alianza entre la Universidad San Sebastián e i-ED como representantes de Coursera en LATAM, marca un antes y un después en la forma en que concebimos la formación universitaria. Desde i-ED, creemos que integrar microcredenciales internacionales en la oferta curricular no solo fortalece la empleabilidad de los estudiantes, sino que conecta la educación con los desafíos reales del mercado laboral. Estamos convencidos de que este es el camino: una educación de clase mundial, accesible y alineada con las habilidades que el futuro exige hoy.”',
               'En i-ED seguiremos acompañando a las instituciones que apuestan por una educación transformadora, conectada con el futuro del trabajo y las oportunidades globales.'
              ] 
      },
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
        text: "El Global Skills Report 2025 ubica al país en el puesto 45 de 109 naciones, con avances en tecnología, ciencia de datos y negocios. El 7% de la fuerza laboral ya busca capacitarse online."
      },
      {
        type: "imageText",
        src: "/talentoDigital.png",
      },
      {
        type: "paragraph",
        text: ["En medio de la aceleración tecnológica global, el Perú empieza a posicionarse como una cantera de talento digital. El país ocupa el puesto 45 de 109 economías analizadas en el Global Skills Report 2025 de Coursera, destacando en áreas clave como tecnología (puesto 38), ciencia de datos (46) y negocios (54).",
               'El informe —basado en datos de más de 175 millones de usuarios en todo el mundo— señala que el 7% de la fuerza laboral peruana está activa en esta plataforma de aprendizaje online, lo que revela un interés creciente por el desarrollo de competencias ligadas a la economía digital.',
               'Uno de los focos del reporte es el notable crecimiento en la demanda de cursos vinculados a nuevas tecnologías. Solo en el último año, las inscripciones en programas de inteligencia artificial generativa (GenAI) crecieron 243% en el país, mientras que los cursos de ciberseguridad y certificaciones profesionales aumentaron un 33%.',
               '“Este crecimiento muestra que los profesionales peruanos están dando pasos importantes hacia la transformación de su perfil laboral. La adopción de habilidades digitales de alto valor es clave para aumentar la competitividad del país”, comentó Gilbert Leiva, CEO de I‑ED, organización que representa a Coursera en Perú.'
              ] 
      },
      {
        type: "imageText",
        src: "/talentoDigital1.png",
      },
      {
        type: "subtitle",
        text: "Talento diverso, competencias en expansión"
      },
      {
        type: "paragraph",
        text: ['El informe también resalta una participación significativa de mujeres en el aprendizaje digital. Representan el 44% del total de estudiantes peruanos en Coursera, con presencia destacada en inteligencia artificial generativa (28%), programas STEM (32%) y certificaciones profesionales (13%).',
               'Entre las habilidades más desarrolladas en el país figuran la inteligencia de mercados, el desarrollo de negocios, el marketing de marca y la gestión financiera. Estas áreas resultan esenciales para sectores que demandan personal técnico, estratégico y altamente capacitado.',
               'A pesar del avance, el camino hacia una digitalización más equitativa aún presenta desafíos. El cierre de brechas educativas, de género y de acceso tecnológico será determinante para consolidar una economía basada en el conocimiento.',
               'El informe completo del Global Skills Report 2025 puede consultarse aquí.'
              ] 
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
        text: "El informe revela un crecimiento notable en cursos de inteligencia artificial generativa y ciberseguridad mientras expertos destacan la oportunidad para consolidar una economía del conocimiento con profesionales preparados para afrontar los desafíos tecnológicos del mercado."
      },
      {
        type: "image",
        src: "/habilidadesDigitales.png"
      },
      {
        type: "paragraph",
        text: [
          "Perú ha sido reconocido por su avance en habilidades digitales al alcanzar el puesto 45 entre 109 países en el Global Skills Report 2025, elaborado por Coursera. Este informe global, que mide la preparación del talento digital en áreas como tecnología, ciencia de datos y negocios, coloca al país andino como un actor emergente en el camino hacia una economía del conocimiento.",
          'La posición obtenida refleja una mejora sostenida en la capacidad de la población para enfrentar los desafíos de una economía cada vez más digitalizada. En un mundo donde las habilidades tecnológicas definen la competitividad, Perú comienza a consolidar una base técnica clave para su desarrollo.'
        ]
      },
      {
        type: "subtitle",
        text: "Indicadores que muestran progreso en digitalización"
      },
      {
        type: "paragraph",
        text: [
          "El desempeño de Perú en el informe es alentador. El país ocupa el puesto 38 en habilidades tecnológicas, el 46 en ciencia de datos y el 54 en negocios. Estas cifras, aunque todavía modestas, indican una base sobre la que puede construirse una fuerza laboral más preparada para los cambios disruptivos que impone la transformación digital.",
          'Según el informe de Coursera, el país muestra un creciente interés por las tecnologías emergentes, especialmente en los últimos doce meses. Las inscripciones en cursos de inteligencia artificial generativa (GenAI) se dispararon en un 243%, mientras que los programas relacionados con ciberseguridad y certificados profesionales experimentaron un crecimiento del 33%. Esta tendencia sugiere un esfuerzo consciente y sostenido por parte de los profesionales peruanos para adquirir competencias que son cada vez más demandadas a nivel global.'
        ]
      },
      {
        type: "image",
        src: "/habilidadesDigitales1.png"
      },
      {
        type: "subtitle",
        text: "Una economía del conocimiento en construcción"
      },
      {
        type: "paragraph",
        text: [
          'Expertos del sector tecnológico coinciden en que Perú está en una etapa decisiva para definir su rol en la economía digital del futuro. Gilbert Leiva, CEO de I-ED, socio oficial de Coursera en Perú, señaló que “Perú está dando pasos firmes hacia una economía del conocimiento, con profesionales que desarrollan habilidades digitales para adaptarse a los cambios tecnológicos del mercado”.',
          'Para Leiva, el notable crecimiento en áreas como inteligencia artificial y ciberseguridad representa “un compromiso con el desarrollo de competencias de alto valor”. Además, advierte que este momento debe aprovecharse para consolidar los avances logrados y proyectar el desarrollo tecnológico del país a largo plazo.'
        ]
      },
      {
        type: "subtitle",
        text: "Participación femenina y reducción de brechas"
      },
      {
        type: "paragraph",
        text: [
          'Uno de los puntos destacados del informe es la participación de las mujeres peruanas en el proceso de adquisición de habilidades digitales. Ellas representan el 44% del total de estudiantes en Coursera, con una presencia significativa en sectores estratégicos: 28% en GenAI, 32% en programas STEM (ciencia, tecnología, ingeniería y matemáticas) y 13% en certificaciones profesionales.',
          'Estos datos apuntan a una tendencia positiva en cuanto a inclusión de género en áreas clave para el desarrollo económico del país. No obstante, aún existen desafíos importantes en cuanto al acceso y permanencia de las mujeres en campos tradicionalmente dominados por hombres, especialmente en los niveles más altos de especialización y liderazgo tecnológico.'
        ]
      },
      {
        type: "image",
        src: "/habilidadesDigitales2.png"
      },
      {
        type: "subtitle",
        text: "Habilidades clave para sectores productivos"
      },
      {
        type: "paragraph",
        text:'Las competencias más desarrolladas por los estudiantes peruanos en Coursera revelan una alineación con las necesidades de sectores productivos que requieren personal altamente calificado. Entre las habilidades mejor posicionadas se encuentran:'
      },
      {
        type: "list",
        items: [
          "Inteligencia de mercados",
          "Desarrollo de negocios",
          "Marketing de marca",
          "Gestión financiera"
        ]
      },
      {
        type: "paragraph",
        text: 'Estas capacidades son fundamentales para el crecimiento de empresas que buscan innovar, posicionarse en mercados internacionales y responder a nuevas demandas del consumidor digital.'
      },
      {
        type: "subtitle",
        text: "Un camino prometedor, pero con retos pendientes"
      },
      {
        type: "paragraph",  
        text: [
          'Si bien Perú ha logrado avances importantes, el camino hacia una verdadera transformación digital inclusiva aún enfrenta retos estructurales. Para consolidar este proceso, es fundamental mantener el impulso de la capacitación, cerrar las brechas de acceso digital (especialmente en zonas rurales), y fortalecer la articulación entre formación técnica, innovación y oportunidades laborales concretas.',
          'Además, el sector público, el privado y las instituciones educativas deben colaborar estrechamente para diseñar políticas que permitan que más peruanos —de todas las regiones y niveles socioeconómicos— puedan acceder a oportunidades de formación tecnológica y crecimiento profesional.',
          'Con un escenario global que exige talento adaptable y altamente calificado, Perú parece estar en el camino correcto. Sin embargo, su éxito dependerá de su capacidad para sostener este ritmo de desarrollo, garantizar una inclusión efectiva y convertir el conocimiento en progreso económico y social.'
        ]      
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
