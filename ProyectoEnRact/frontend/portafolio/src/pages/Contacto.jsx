import React from "react";
import useContactForm from "../Hooks/useContactForm";
import "../Styles/Contacto.css";
import enviar from "../assets/enviar.png";
import imgMessage from "../assets/mensaje2.svg";

export default function Contact() {
  const { form, formData, handleChange, sendEmail } = useContactForm();
  return (
    <section id="contactame">
      <div className="contenedor-img">
        <h2>CONTÁCTAME</h2>
        <img src={imgMessage} alt="" />
      </div>
      <div className="contenedor-contacto">
        <div className="content-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="nombre"
              type="text"
              placeholder="Nombre"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              required
            />
            <input
              className="correo"
              type="email"
              placeholder="Correo electrónico"
              name="user_email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="mensaje"
              placeholder="Escribe tu mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={15}
            ></textarea>
            <div className="wrapper-btn">
              <button className="btn" type="submit">
                <span>ENVIAR</span>
                <img src={enviar} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
