import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Hero } from './Component/Hero';
import Ask from './Component/Ask';
import { Testimonials } from './Component/Testimonials';
import { DoctorPage } from './Component/DoctorPage';
import { Footer } from './Component/Footer';
import File from './File';
import { Routes, Route } from 'react-router-dom';
import { About } from './Component/About';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  const [accuracy, setAccuracy] = useState(2);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,

    });
  })

  useEffect(() => {
    fetch("/api/ml")
      .then((res) => res.json())
      .then((data) => setAccuracy(data.accuracy))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="w-[1728px] relative bg-sky-500 items-center">
      <p> Ayurmed</p>
      <Navbar />
      <div data-aos="fade-up-right">
        <Hero />
      </div>
      <Ask />
      <div data-aos="fade-right"><Testimonials /></div>
      <footer>
        <Footer />
      </footer>
      <div>Output: {accuracy}</div>
      <div className='container'>
        <Routes>
          <Route path="/commit" element={<File />} />
          <Route path="/hhh" element={<DoctorPage />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
