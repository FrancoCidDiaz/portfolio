import './App.css';
import About from './components/About';
import Certificados from './components/Certificados';
import Contacto from './components/Contacto';
import Habilidades from './components/Habilidades';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Perfiles from './components/Perfiles';
import Proyectos from './components/Proyectos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Inicio/>
      <About/>
      <Proyectos/>
      <Habilidades/>
      <Certificados/>
      <Perfiles/>
      <Contacto/>
    </div>
  );
}

export default App;
