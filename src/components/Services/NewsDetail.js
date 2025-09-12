// components/Services/NewsDetails.js

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { newsData } from "./Notice.js"; // Asegúrate de que Notice.js exporte `newsData` correctamente

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  // Redirección automática si la noticia tiene un link externo
  useEffect(() => {
    if (newsItem?.externalLink) {
      window.location.href = newsItem.externalLink;
    }
  }, [newsItem]);

  // Mostrar mensaje si no existe la noticia
  if (!newsItem) return <p>Noticia no encontrada</p>;

  // Evita renderizar el contenido si ya se redirige
  if (newsItem.externalLink) return null;

  return (
    <div className="news-details-container">
      <div className="news-details-content">
        <h1>{newsItem.title}</h1>

        {/* Cita destacada */}
        {newsItem.quote && (
          <p className="news-quote">
            <em>{newsItem.quote}</em>
          </p>
        )}

        {/* Render dinámico de bloques de contenido */}
        {newsItem.contentBlocks?.map((block, index) => {
          switch (block.type) {
            case "subtitle":
              return <h2 key={index}>{block.text}</h2>;
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "image":
              return (
                <img
                  key={index}
                  src={block.src}
                  alt={block.alt || "Imagen de la noticia"}
                  className="news-image"
                />
              );
              case "imageText":
                return (
                  <div key={index} className="image-text-block">
                    <img src={block.src} alt={block.alt || "Imagen"} />
                    {Array.isArray(block.text)
                      ? block.text.map((t, i) => <p key={i}>{t}</p>)
                      : <p>{block.text}</p>}
                  </div>
                );
              
            case "quote":
              return (
                <blockquote key={index}>
                  <em>{block.text}</em>
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default NewsDetail;
