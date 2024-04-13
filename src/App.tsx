import './App.scss'

// @ts-ignore
import ParticelsComponent from './Components/Particles_Stars.jsx'
import AboutPage from './Pages/About.js'
import LandingPage from './Pages/Landing.js'
import ContactPage from './Pages/Contact.js'
import AllProjects from './Pages/AllProjects.tsx'



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

