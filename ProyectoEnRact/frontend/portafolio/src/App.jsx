import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/about';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './Styles/App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='main-content'>
          <main >
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
