import Hero from "./sections/Hero";
import "./App.scss";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import Art from "./sections/Art";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Timeline />
      <Art />
      <Footer />
    </div>
  );
}

export default App;
