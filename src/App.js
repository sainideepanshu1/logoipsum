import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import FirstSection from './components/FirstSection/FirstSection';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import SecondSection from './components/SecondSection/SecondSection';
import Testimonials from './components/Testimonials/Testimonials';
import Feedback from './components/Feedback/Feedback';
import FooterData from './data/FooterData';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import LoginData from './data/LoginData'
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<div><FirstSection /><SecondSection /></div>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login data={LoginData} />} />
      </Routes>
      <Footer data={FooterData} />
    </div>
  );
}

export default App;
