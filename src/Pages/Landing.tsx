// @ts-ignore
import ParticlesComponent from '../Components/Particles_Stars.jsx'

export default function LandingPage () {
    return (
        <>
            <ParticlesComponent id="particles" />
            <div className='landing-page min-h-[100vh] h-auto p-16 flex justify-center'>
                <div className='relative xs:pt-12 w-[100%] lg:mt-32'>
                    <h1 className='font-bold text-4xl xxs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl lg:text-center lg:-translate-y-16 '>Hi! My name is Ignacy. <br/> </h1>
                    <h2 className='section-header mt-16 xxs:text-6xl sm:text-7xl md:text-8xl lg:text-7xl '>I make web-apps. </h2>
                    <h5 className='pt-4 xxs:text-xl sm:text-2xl md:text-3xl lg:mt-4'>(frontend, backend, ui)</h5>
                </div>
                <div className='flex items-center mx-auto w-[100vw] min-h-[50%] absolute flex justify-center items-center bottom-0'>
                    <div className='relative section-menu mt-12 pt-8 xs:mb-12 xs:pb-12 xs:mt-0 xs:pt-0 flex justify-center md:pt-[15%] lg:hidden  '>
                        <button className='menu-button p-2 m-2 sm:p-4 sm:text-2xl   '>About</button>
                        <button className='menu-button p-2 m-2 sm:p-4 sm:text-2xl   '>Projects</button>
                        <button className='menu-button p-2 m-2 sm:p-4 sm:text-2xl   '>Contact</button>
                    </div>
                    <div className='hidden lg:block'>

                    </div>
                </div>
            </div>
        </>
    )}