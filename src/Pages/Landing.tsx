import Lottie from "lottie-react";
import windowAnimation from "../../public/lotties/window.json";

// @ts-ignore
import ParticlesComponent from "../Components/Particles_Stars.jsx";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page h-auto min-h-[100vh] px-16 md:justify-center">
        <div className="relative w-[100%] xs:pt-12 lg:mt-24 xl:mt-32">
          <h1 className="text-navy text-4xl font-bold xxs:text-5xl sm:text-6xl lg:-translate-y-16 lg:text-6xl">
            Hi! My name is Ignacy. <br />
          </h1>
          <h2 className="text-sea mt-16 mt-8 text-3xl font-bold xxs:text-5xl sm:text-6xl lg:max-w-[70vw] lg:-translate-y-16 lg:text-7xl">
            I make small-scale web-apps tailored for any client's needs.{" "}
          </h2>
          <h5 className="pt-4 xxs:text-xl sm:text-2xl md:text-3xl lg:hidden">
            (frontend, backend, ui)
          </h5>
        </div>
        <div className=" bottom-0 mx-auto mt-[33%] sm:mt-[15%] md:mt-[7%] flex flex min-h-[50%] items-center items-center justify-center">
          <div className="section-menu relative mt-12 flex pt-8 xs:mb-12 xs:mt-0 xs:pb-12 xs:pt-0 md:justify-center md:pt-[25%] lg:hidden">
            <button className="menu-button m-2 p-2 sm:p-3 sm:text-xl">
              About
            </button>
            <button className="menu-button m-2 p-2 sm:p-3 sm:text-xl">
              Projects
            </button>
            <button className="menu-button m-2 p-2 sm:p-3 sm:text-xl">
              Contact
            </button>
          </div>
          <div className="m-8 hidden lg:block ">
            {/* <h4 className="text-2xl font-bold">About me</h4> */}
            <p className="about text-navy relative m-8 p-4 text-left text-xl -translate-y-20">
              As a, currently freelancing, full-stack developer, I specialize in
              developing small-scale applications. I find my ground working with
              servers and databases in Node.js just as well as when designing
              seamless and intuitive experiences on the front-end working with
              ReactJs. I also have experience in UI design.
            </p>
          </div>
          <Lottie
            className="hidden max-w-96 lg:block mr-20 -translate-y-20"
            animationData={windowAnimation}
            loop={true}
          />
        </div>
      </div>
    </>
  );
}
