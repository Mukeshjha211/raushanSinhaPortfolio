import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills></Skills>
      <Portfolio></Portfolio>
      <WorkExperience></WorkExperience>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
