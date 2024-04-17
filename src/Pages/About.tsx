import Lottie from "lottie-react";
import layingAnimation from "../../public/lotties/looking.json";

export default function AboutPage() {
  return (
    <div className="section about-me bg-grey xxxs:px-16 min-h-[100vh] px-2 sm:px-32 md:pb-16 lg:hidden" id="about-section">
      <h2 className="section-header text-center">About me. </h2>
      <div className="flex flex-col items-center px-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl">
        <div className="float-left py-[20%] pb-8 text-left xs:py-[15%] md:py-[7.5%]">
          <span>My name is Ignacy and I'm a freelancing </span>
          <span className="text-2xl font-bold xxs:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl">
            full-stack
          </span>{" "}
          web developer.
        </div>
        <div className="float-right pb-8 text-right xxs:py-[15%] md:py-[7.5%]">
          <span>
            {" "}
            My main stack is{" "}
            <span className="text-2xl font-bold xxs:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl">
              Node.js
            </span>{" "}
            and{" "}
            <span className="text-2xl font-bold  xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              React
            </span>{" "}
            w/ various UI frameworks.
          </span>
        </div>

        <div className=" z-10 float-left pb-8 text-left xxs:py-[15%] md:py-[7.5%]">
          <span>
            I'm also experienced in{" "}
            <span className="text-2xl font-bold  xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              designing UIs
            </span>{" "}
            tailored to my clients' needs.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center pb-16 xxs:pb-36 md:mt-32 lg:hidden">
        <Lottie
          className="relative z-10 w-96 max-w-[60vw] -translate-y-24 pt-24 md:-translate-y-48"
          animationData={layingAnimation}
          loop={true}
        />
      </div>
    </div>
  );
}
