import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../Styles/ContenidoPrincipal.css";

export default function main() {
  return (
    <section id="contenido-principal">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
