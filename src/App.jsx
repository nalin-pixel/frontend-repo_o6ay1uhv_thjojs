import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0b0b10] dark:text-white font-inter">
      <Navbar />

      <main className="pt-20 md:pt-24">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Your Name. Built with love, React, and 3D.
      </footer>

      <style>
        {`
          .animate-spin-slow { animation: spin 14s linear infinite; }
          @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        `}
      </style>
    </div>
  );
}

export default App;
