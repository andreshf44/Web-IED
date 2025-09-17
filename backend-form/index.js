// backend-form/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { nombre, email, pais, mensaje } = req.body;

  if (!nombre || !email || !pais || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos en el formulario' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587, // Office365 usa este puerto
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Formulario Web iED" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "Nuevo mensaje desde formulario iED",
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Mensaje:</strong><br>${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Ocurrió un error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
