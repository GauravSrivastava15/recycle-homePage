
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Pickup from './components/Pickup';
import Services from './components/Services';
import Slider from './components/Slider';

function App() {
  return (
    <div className="bg-lime-200 w-screen h-screen overflow-x-hidden">
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Pickup />
      <Contact />
    </div>
  );
}

export default App;
