
import './App.css';
import { useState } from "react";
import { CV } from "./components/CV/CV";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import More from './components/More/More';
const { hero, education, experience, languages, habilities,  } = CV;

function App() {

  const [showEducation, setShowEducation] = useState(true);


  
  return (
<div className="App">
      <div>
        <Hero hero={hero} />
        <div className="divider">
          <span></span>
          <span>Sobre mi</span>
          <span></span>
        </div>
        <About hero={hero} />
      </div>
      <nav>
        <div className="divider">
          <span></span>
          <span>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Educación
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
            </button>
          </span>
          <span></span>
        </div>
      </nav>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
       
      />
      <br />
      <br />
    </div>
  );
}

export default App;
