import Hero from "./sections/Hero";
import "./App.scss";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import Art from "./sections/Art";
import Footer from "./sections/Footer";
import Preview from "./sections/Preview";
import { useState } from "react";

import school from "./res/pic/school.png";
import college from "./res/pic/college.jpg";
import cts from "./res/pic/cts.jpg";

function App() {
  const [showSchool, setShowSchool] = useState(false);
  const [showCollege, setShowCollege] = useState(false);
  const [showWorkplace, setShowWorkplace] = useState(false);

  return (
    <div className="App">
      {showSchool && <Preview image={school} setShow={setShowSchool} />}
      {showCollege && <Preview image={college} setShow={setShowCollege} />}
      {showWorkplace && <Preview image={cts} setShow={setShowWorkplace} />}
      <Hero />
      <About />
      <Timeline
        showSchool={setShowSchool}
        showCollege={setShowCollege}
        showWorkplace={setShowWorkplace}
      />
      <Art />
      <Footer />
    </div>
  );
}

export default App;
