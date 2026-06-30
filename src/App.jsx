import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CustomToastContainer } from "./components/Toast";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import SocialLinks from "./components/SocialLinks";
import StarsBackground from "./components/StarsBackground";
import NeonCursor from "./components/NeonCursor";

function App() {
  const [isCursorEnabled, setIsCursorEnabled] = useState(() => {
    const saved = localStorage.getItem("cursorEnabled");
    return saved !== null ? JSON.parse(saved) : false;
  });

  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    localStorage.setItem("cursorEnabled", JSON.stringify(isCursorEnabled));
  }, [isCursorEnabled]);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  return (
    <>
      {/* {isCursorEnabled && <NeonCursor />} */}
      {!isLightMode && <StarsBackground />}
      <Navbar 
        isCursorEnabled={isCursorEnabled} 
        setIsCursorEnabled={setIsCursorEnabled}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
      />
      <main className='main-container max-w-7xl'>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <SocialLinks />
      <CustomToastContainer />
    </>
  );
}

export default App;
