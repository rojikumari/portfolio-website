import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Project from './Components/Projects';

function App() {
  return (
    <div>
       <Header/>
       <HeroSection/>
       <About/>
       <Project/>
    </div>
  );
}

export default App;
