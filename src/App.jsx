import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Aurora from "./components/Aurora.jsx";
import AboutMe from "./components/AboutMe.jsx";
import ContactSection from "./components/Contact.jsx";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora full-screen background */}
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutMe />
        <Skills />
        <Project />
        <CustomCursor />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;
