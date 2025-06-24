import "./App.scss";
import React from "react";
// @ts-ignore
import ParticelsComponent from "./Components/Particles_Stars.jsx";
import AllProjects from "./Pages/AllProjects.tsx";
import ContactPage from "./Pages/Contact.js";
import LandingPage from "./Pages/Landing.js";

export default function App() {
  return (
    <React.Fragment>
      <ParticelsComponent id="particles" />
      <div className="flex w-[100vw] flex-col items-center">
        {/* <div className="max-w-7xl"> */}
        <LandingPage />
        <AllProjects />
        <ContactPage />
        {/* </div> */}
      </div>
    </React.Fragment>
  );
}
