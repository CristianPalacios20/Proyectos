import InfoPersonal from "./components/info-personal";
import ContenidoPrincipal from "./components/ContenidoPrincipal";
import { HashRouter } from "react-router-dom";
import "./Styles/App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <InfoPersonal />
        <ContenidoPrincipal />
      </div>
    </HashRouter>
  );
}
export default App;
