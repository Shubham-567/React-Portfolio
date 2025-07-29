import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className='main-container max-w-5xl'>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
