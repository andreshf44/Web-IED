import React, { useState, useEffect } from 'react';
import './Components.css';  // Importamos los estilos de Header

const WhatsappFloatingButton = () => {
  const phoneNumber = '1234567890'; // Número de WhatsApp (reemplaza con el número real)
  const [isFormVisible, setIsFormVisible] = useState(false); // Nuevo estado para visibilidad del formulario

  // Función para manejar la visibilidad del formulario de contacto
  // Mostrar  formulario
  const toggleContactForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Cerrar formulario
  const closeForm = (e) => {
    e.stopPropagation(); // Previene que el click se propague al contenedor padre
    setIsFormVisible(false);
  };

  return (
    <div className="whatsapp-floating-button" onClick={toggleContactForm}>
      {!isFormVisible && (
      <a 
        /*href={`https://wa.me/${phoneNumber}`} */
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <img className='body-icon' src="/whatsapp-icon1.png" alt="WhatsApp" />
      </a>
      )}
      {isFormVisible && ( 
        <div className='form-contacto'>
        <div className='top-section'>
          <span>Chat iED</span>
          <i className="fas fa-minus" onClick={closeForm}></i>
        </div>
        <div className='down-section'>
          <p>Hola 👋 Aquí puedes dejar tu consulta:</p>
          <div className='data-section'>
            <label>Nombre y Apellido</label>
            <input></input>

            <label>Correo electrónico</label>
            <input></input>

            <label>País</label>
            <input></input>

            <label>Mensaje</label>
            <input></input>
          </div>
          <button>Enviar</button>
        </div>
        </div>
      )}
    </div>
   
  );
};

export default WhatsappFloatingButton;
