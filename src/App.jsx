import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className='main-container'>
        <Hero />
        <Skills />
      </main>
    </>
  );
}

export default App;
