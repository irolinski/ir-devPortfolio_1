import AboutPage from "./Pages/About.js";
import LandingPage from "./Pages/Landing.js";
import ContactPage from "./Pages/Contact.js";
import AllProjects from "./Pages/AllProjects.tsx";

// @ts-ignore
import ParticelsComponent from "./Components/Particles_Stars.jsx";

import "./App.scss";

export default function App() {
  return (
    <>
      <ParticelsComponent id="particles" />
      <LandingPage />
      <AboutPage />
      <AllProjects />
      <ContactPage />
    </>
  );
}
