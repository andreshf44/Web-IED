import React from 'react';
import './Components.css';

const WhatsappFloatingButton = ({ isFormVisible, openForm, closeForm }) => {
  return (
    <div className="whatsapp-floating-button" onClick={(e) => e.stopPropagation()}>
      {!isFormVisible && (
        <button className="open-form-button" onClick={openForm}> {/* <-- Esto es lo importante */}
          <img className="body-icon" src="/whatsapp-icon1.png" alt="WhatsApp" />
        </button>
      )}

      {isFormVisible && (
        <div className="form-contacto">
          <div className="top-section">
            <span>Chat iED</span>
            <i className="fas fa-minus" onClick={closeForm}></i>
          </div>
          <div className="down-section">
            <p>Hola 👋 Aquí puedes dejar tu consulta:</p>
            <div className="data-section">
              <label>Nombre y Apellido</label>
              <input type="text" />

              <label>Correo electrónico</label>
              <input type="email" />

              <label>País</label>
              <input type="text" />

              <label>Mensaje</label>
              <input type="text" />
            </div>
            <button>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappFloatingButton;
