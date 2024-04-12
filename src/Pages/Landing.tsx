// @ts-ignore
import ParticlesComponent from '../Components/Particles_Stars.jsx'

export default function LandingPage () {
    return (
        <div className='landing-page h-[100vh] px-16'>
            <ParticlesComponent id="particles" />
            <div className='relative'>
                <h1 className='font-bold text-4xl mt-16'>Hi! My name is Ignacy. <br/> </h1>
                <h2 className='section-header mt-16'>I make web-apps. </h2>
                <h5 className='p-2'>(frontend, backend, ui)</h5>
            </div>
            <div className='relative section-menu mt-12 p-4 mx-auto flex justify-center'>
                <button className='menu-button p-2 m-2'>About</button>
                <button className='menu-button p-2 m-2'>Projects</button>
                <button className='menu-button p-2 m-2'>Contact</button>
            </div>
        </div>
)}