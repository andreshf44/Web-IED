import React, { useState } from 'react';
import './Components.css';

const WhatsappFloatingButton = ({ isFormVisible, openForm, closeForm }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pais, setPais] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xkgvaeqp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          email,
          pais,
          mensaje
        }),
      });

      console.log('Respuesta status:', response.status);
      const respText = await response.text();
      console.log('Respuesta texto:', respText);

      if (response.ok) {
        alert('¡Mensaje enviado!');
        setNombre('');
        setEmail('');
        setPais('');
        setMensaje('');
        closeForm();
      } else {
        alert('Error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al enviar.');
    }
  };

  return (
    <div className="whatsapp-floating-button" onClick={(e) => e.stopPropagation()}>
      {!isFormVisible && (
        <button className="open-form-button" onClick={openForm}>
          <img className="body-icon" src="/whatsapp-icon1.png" alt="WhatsApp" />
        </button>
      )}

      {isFormVisible && (
        <form className="form-contacto" onSubmit={handleSubmit}>
          <div className="top-section">
            <span>Chat iED</span>
            <i className="fas fa-minus" onClick={closeForm}></i>
          </div>
          <div className="down-section">
            <p>Hola 👋 Aquí puedes dejar tu consulta:</p>
            <div className="data-section">
              <label>Nombre y Apellido</label>
              <input
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <label>Correo electrónico</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>País</label>
              <input
                name="pais"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                required
              />

              <label>Mensaje</label>
              <textarea
                name="message"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default WhatsappFloatingButton;
