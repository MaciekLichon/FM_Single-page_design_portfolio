import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Tiles from './components/Tiles/Tiles';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

const App = () => {
  return (
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Tiles />
        <About />
        <Gallery />
        <Contact />
        <Header />
      </main>
  );
};

export default App;
