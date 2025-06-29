import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Documentos from "./pages/Documentos";
import JuventudRotary from "./pages/JuventudRotatoria";
import Programas from "./pages/Programas";
import Blog from "./pages/Blog";
import Equipo from "./pages/Equipo";
import Interac from "./pages/Interact";
import Rotaract from "./pages/Rotaract";
import Ryla from "./pages/Ryla";
import CentroEducativoEnvigado from "./pages/CentroEducativoEnvigado";
import Donar from "./pages/Donar";
import Bazar from "./pages/Bazar";
import Footer from "./components/Footer"

import "../src/styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/juventudRotary" element={<JuventudRotary />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/interact" element={<Interac />} />
        <Route path="/rotaract" element={<Rotaract />} />
        <Route path="/ryla" element={<Ryla />} />
        <Route
          path="/centroEducativoEnvigado"
          element={<CentroEducativoEnvigado />}
        />
        <Route path="/donar" element={<Donar />} />
        <Route path="/bazar" element={<Bazar />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
