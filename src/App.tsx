import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id='content'>
          <Hero />
          <AboutMe />
          <Resume />
          <Projects/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
