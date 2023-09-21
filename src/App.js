import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import FirstSection from './components/FirstSection/FirstSection';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import SecondSection from './components/SecondSection/SecondSection';
import Testimonials from './components/Testimonials/Testimonials';
import FooterData from './data/FooterData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <AboutMe />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer data={FooterData} />
    </div>
  );
}

export default App;
