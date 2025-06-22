import "./App.scss";
// @ts-ignore
import ParticelsComponent from "./Components/Particles_Stars.jsx";
import AllProjects from "./Pages/AllProjects.tsx";
import ContactPage from "./Pages/Contact.js";
import LandingPage from "./Pages/Landing.js";

export default function App() {
  return (
    <>
      <ParticelsComponent id="particles" />
      <LandingPage />
      <AllProjects />
      <ContactPage />
    </>
  );
}
