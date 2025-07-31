import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import SocialLinks from "./components/SocialLinks";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <>
      <StarsBackground />
      <Navbar />
      <main className='main-container max-w-5xl'>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <SocialLinks />
    </>
  );
}

export default App;
