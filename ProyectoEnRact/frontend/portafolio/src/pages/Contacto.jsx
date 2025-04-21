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
          <img src={imgMessage} alt="" />
          <h1>Hablemos</h1>
        </div>
        <div className="contenedor-contacto">
          <div className="anillos">
            <i style={{'--clr': '#4f03fe'}}></i>
            <i style={{'--clr': '#fb3900'}}></i>
            <i style={{'--clr': '#fe03f7'}}></i>
          </div>
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
              placeholder="Correo"
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
              rows={5}
            ></textarea>
            <div className="wrapper-btn">
              <button type="submit">
                <span>ENVIAR</span>
                <img src={enviar} alt="" />
              </button>
            </div>
          </form>
        </div>
      </section>
  );
}
