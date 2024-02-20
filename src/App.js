import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Project from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
       <Header/>
       <HeroSection/>
       <About/>
       <Project/>
       <Skills/>
    </div>
  );
}

export default App;
