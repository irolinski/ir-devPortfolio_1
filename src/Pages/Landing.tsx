import Lottie from "lottie-react";
import windowAnimation from "../../public/lotties/window.json";

// @ts-ignore
import ParticlesComponent from "../Components/Particles_Stars.jsx";

export default function LandingPage() {
  return (
    <>
      <a className="relative flex min-h-[100vh] w-[100vw] p-16 md:hidden" href="#landing-page-main"> 
        <Lottie
          className="relative min-w-[100%] -translate-y-6 hover:cursor-s-resize"
          animationData={windowAnimation}
          loop={true}
        />
      </a>

      <div className="landing-page h-auto min-h-[100vh] px-16 pt-8 md:justify-center lg:ml-12 xl:ml-36 2xl:ml-24">
        <div className="relative w-[100%] xs:pt-12 lg:mt-24 xl:mt-32">
          <div className="float-right mr-8 hidden lg:mr-24 lg:flex lg:flex-col lg:pl-20 xl:mr-52 2xl:ml-16">
            <a
              className="bubble-link github-link"
              href="https://github.com/szczek?tab=repositories"
              target="_blank"
            >
              <img className="github-icon" src="/icons/github.svg" />
            </a>
            <a className="bubble-link contact-link" href="#contact-section">
              <img className="contact-icon" src="/icons/contact.svg" />
            </a>
            <a
              className="bubble-link instagram-link"
              href="https://www.instagram.com/ign_cy"
              target="_blank"
            >
              <img className="instagram-icon" src="/icons/instagram.svg" />
            </a>
          </div>
          <div className="xl:mr-8" id="landing-page-main">
            <h1 className="text-4xl font-bold xxs:text-5xl sm:text-6xl lg:ml-12 lg:-translate-y-16 lg:text-6xl">
              Hi! My name is Ignacy. <br />
            </h1>
            <h2 className="text-sea mt-16 mt-8 text-3xl font-bold xxs:text-5xl sm:text-6xl lg:ml-12 lg:max-w-[70vw] lg:-translate-y-16 lg:text-7xl">
              I make web-apps tailored for any client's needs.{" "}
            </h2>
            <h5 className="pt-4 xxs:text-xl sm:text-2xl md:text-3xl lg:hidden">
              (frontend, backend, ui)
            </h5>
          </div>
        </div>
        <div className=" bottom-0 mx-auto mt-[33%] flex flex min-h-[50%] items-center items-center justify-center sm:mt-[15%] md:mt-[7%]">
          <div className="section-menu xxxs:mt-12 xxxs:pt-8 relative flex xs:mb-12 xs:mt-0 xs:pb-12 xs:pt-0 md:justify-center md:pt-[25%] lg:hidden">
            <a
              className="menu-button m-2 p-2 sm:p-3 sm:text-xl"
              href="#about-section"
            >
              About
            </a>
            <a
              className="menu-button m-2 p-2 sm:p-3 sm:text-xl"
              href="#projects-section"
            >
              Projects
            </a>
            <a
              className="menu-button m-2 p-2 sm:p-3 sm:text-xl"
              href="#contact-section"
            >
              Contact
            </a>
          </div>
          <div className="m-8 hidden lg:block ">
            <p className="about relative m-2 -translate-y-20 p-4 text-left text-xl">
              As a currently <b>freelancing full-stack developer</b>, I
              specialize in developing small-scale applications. I find my
              ground working with servers and databases in <b>Node.js</b> just
              as well as when designing seamless and intuitive experiences on
              the front-end working with <b>ReactJs</b>. Working with clients,
              I've gathered experience in turning wishes into reality both
              through code and through personalized <b>UI</b> designs.
            </p>
          </div>
          <Lottie
            className="hidden max-w-96 -translate-y-20 lg:block xl:mr-20"
            animationData={windowAnimation}
            loop={true}
          />
        </div>
      </div>
    </>
  );
}
