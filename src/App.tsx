import "./App.scss";

// @ts-ignore
import ParticelsComponent from "./Components/Particles_Stars.jsx";
import AboutPage from "./Pages/About.js";
import LandingPage from "./Pages/Landing.js";
import ContactPage from "./Pages/Contact.js";
import AllProjects from "./Pages/AllProjects.tsx";
import Lottie from "lottie-react";

import windowAnimation from "../public/lotties/window.json";

export default function App() {
  return (
    <>
      <ParticelsComponent id="particles" />

      <div className="section relative flex min-h-[100vh] w-[100vw] p-16  md:hidden">
        <Lottie
          className="relative min-w-[100%] -translate-y-6"
          animationData={windowAnimation}
          loop={true}
        />
      </div>

      <LandingPage />
      <AboutPage />
      <AllProjects />
      <ContactPage />
    </>
  );
}
