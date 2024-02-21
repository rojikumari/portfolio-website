import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Project from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
       <Header/>
       <HeroSection/>
       <About/>
       <Project/>
       <Skills/>
       <Contact/>
    </div>
  );
}

export default App;
