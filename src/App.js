import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Project from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Banner from "./Components/NewHeroSection";

function App() {
  return (
    <div>
      <section id="home">
        <Header />
        <Banner/>
        {/* <HeroSection /> */}
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
