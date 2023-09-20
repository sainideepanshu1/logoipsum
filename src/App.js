import AboutMe from './components/AboutMe/AboutMe';
import FirstSection from './components/FirstSection/FirstSection';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import SecondSection from './components/SecondSection/SecondSection';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <AboutMe />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;
