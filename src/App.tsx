import './App.scss'

// @ts-ignore
import ParticelsComponent from './Components/Particles_Stars.jsx'
import AboutPage from './Pages/About.js'
import LandingPage from './Pages/Landing.js'
import ContactPage from './Pages/Contact.js'
import Project from './Pages/Project.tsx';
import AllProjects from './Pages/AllProjects.tsx'

const project1_accordion = [
    {
    question: "App features",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
  },
  {
    question: "Further development",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework."
  }
];


export default function App() {
  return (
    <>
      <div className=''>
        <LandingPage />
        <AboutPage />

        <AllProjects />
        <ContactPage />
      </div>
    </>
  )
}

